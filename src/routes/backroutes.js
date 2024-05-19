// routes/backroutes.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const User = require('../models/user'); // Importa o modelo User
const Pesquisa = require('../models/pesquisa'); // Importa o modelo Pesquisa
const PesquisaParticipante = require('../models/pesquisaParticipante'); // Importa o modelo PesquisaParticipante
const Pessoa = require('../models/pessoas'); // Importa o modelo Pessoa
const winston = require('winston');
const app = express();

// Restante do código...


// Configurações CORS
const corsOptions = {
  origin: '*', // Permitir solicitações de qualquer origem
  methods: 'GET,POST', // Permitir apenas os métodos GET e POST
};
app.use(cors(corsOptions));

app.use(bodyParser.json());

// Conectar ao banco de dados MongoDB
mongoose.connect("mongodb+srv://marcosmmoraes:Tubinh%402914@cluster0.q4uzxup.mongodb.net/", { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Conexão bem-sucedida com o banco de dados MongoDB');
  })
  .catch(err => {
    console.error('Erro ao conectar ao banco de dados MongoDB:', err);
  });

app.post('/api/signup', async (req, res) => {
  try {
    const { email, password, name } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ name, email, password: hashedPassword });
    await user.save();
    const token = jwt.sign({ email: user.email }, 'secretkey', { expiresIn: '1h' });
    res.status(201).json({ 
      message: 'User created successfully',
      user: {
        id: user._id,
        name: user.name,
        email: user.email
      },
      token
    });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.post('/api/signin', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    const token = jwt.sign({ email: user.email }, 'secretkey', { expiresIn: '1h' });

    res.status(200).json({ 
      token,
      _id: user._id // Inclua o _id do usuário na resposta
    });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});


app.post('/api/pesquisas', async (req, res) => {
  try {
    console.log('Corpo da solicitação:', req.body); // Log para verificar o corpo da solicitação
    const { userId, marca, valor, data, horario, grupo, vagas, ramo, classe, situacao } = req.body; // Altere para userId
    console.log('ID do usuário:', userId); // Log para verificar o ID do usuário

    // Verificar se o usuário existe
    const user = await User.findById(userId);
    if (!user) {
      console.log('Usuário não encontrado');
      return res.status(404).json({ error: 'User not found' });
    }

    // Criar a "pesquisa" vinculando ao ID do usuário criador
    const pesquisa = new Pesquisa({ 
      createdBy: userId,
      marca, 
      valor, 
      data, 
      horario, 
      grupo, 
      vagas, 
      ramo, 
      classe,
      situacao
    });
    await pesquisa.save();
    console.log('Pesquisa criada com sucesso');
    res.status(201).json({ message: 'Pesquisa created successfully' });
  } catch (error) {
    console.error('Erro ao criar pesquisa:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});


// Rota para cadastrar uma nova pessoa
app.post('/api/pessoas', async (req, res) => {
  try {
    const {
      nomeCompleto,
      cpf,
      rg,
      telefone,
      email,
      nomeMae,
      dataNascimento,
      chavePix
    } = req.body;

    // Criar uma nova instância de pessoa
    const novaPessoa = new Pessoa({
      nomeCompleto,
      cpf,
      rg,
      telefone,
      email,
      nomeMae,
      dataNascimento,
      chavePix
    });

    // Salvar a nova pessoa no banco de dados
    await novaPessoa.save();

    res.status(201).json({ message: 'Pessoa cadastrada com sucesso' });
  } catch (error) {
    console.error('Erro ao cadastrar pessoa:', error);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
});


// Rota para obter todas as pessoas cadastradas
app.get('/api/pessoas', async (req, res) => {
  try {
    // Buscar todas as pessoas no banco de dados
    const pessoas = await Pessoa.find();

    res.status(200).json(pessoas);
  } catch (error) {
    console.error('Erro ao obter pessoas:', error);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
});


app.get('/api/pesquisas', async (req, res) => {
  try {
    const pesquisas = await Pesquisa.find().populate('createdBy', 'name email');
    res.status(200).json(pesquisas);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Rota para obter o email do usuário pelo ID
app.get('/api/usuarios/:id', async (req, res) => {
  try {
    const userId = req.params.id;
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.status(200).json({ email: user.email });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Rota para criar um novo participante de pesquisa
app.post('/api/pesquisaParticipantes', async (req, res) => {
  try {
    console.log('Body da requisição:', req.body); // Log para verificar o corpo da solicitação
    const { pessoaId, pesquisaId } = req.body;
    
    // Verificar se a pessoa e a pesquisa existem
    console.log('ID da pessoa:', pessoaId); // Log para verificar o ID da pessoa
    console.log('ID da pesquisa:', pesquisaId); // Log para verificar o ID da pesquisa

    const pessoaExistente = await Pessoa.findById(pessoaId);
    const pesquisaExistente = await Pesquisa.findById(pesquisaId);
    
    if (!pessoaExistente || !pesquisaExistente) {
      console.log('Pessoa ou pesquisa não encontrada');
      return res.status(404).json({ error: 'Person or research not found' });
    }

    // Criar um novo participante de pesquisa
    const pesquisaParticipante = new PesquisaParticipante({
      pessoa: pessoaId,
      pesquisa: pesquisaId
    });
    
    await pesquisaParticipante.save();
    console.log('Participante de pesquisa criado com sucesso');
    res.status(201).json({ message: 'Research participant created successfully' });
  } catch (error) {
    console.error('Error creating research participant:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Rota para obter todas as pesquisas atribuídas a uma pessoa
// Rota para obter todos os participantes de pesquisa
// Importe os modelos necessários (Pessoa e PesquisaParticipante)


// routes/api/pesquisaParticipantes.js
app.get('/api/pesquisaParticipantes/:pessoaId', async (req, res) => {
  try {
    console.log('ID da pessoa:', req.params.pessoaId); // Log para verificar o ID da pessoa
    const pesquisaParticipantes = await PesquisaParticipante.find({ pessoa: req.params.pessoaId }).populate('pesquisa');
    console.log('Pesquisas atribuídas:', pesquisaParticipantes); // Log para verificar as pesquisas atribuídas
    res.json(pesquisaParticipantes);
  } catch (error) {
    console.error('Error fetching research participants:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});





// Importar o modelo de pessoa

const logger = winston.createLogger({
  transports: [
    new winston.transports.File({ filename: 'erros.log' })
  ]
});

// Middleware para lidar com erros e registrar detalhes
app.use((err, req, res, next) => {
  logger.error(`Erro: ${err.stack}`);
  res.status(500).send('Erro interno do servidor');
});

// Capturar exceções não tratadas e registrar detalhes
process.on('uncaughtException', (err) => {
  logger.error(`Exceção não tratada: ${err.stack}`);
  process.exit(1);
});

const PORT = process.env.PORT || 5500;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});