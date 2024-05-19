import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  font-family: 'Poppins', sans-serif;
  text-decoration: none;
}
body{
  background-color: #f0f2f5;
  padding: 20px;
  /* Outros estilos para o corpo */
}
.menu {
  display: flex;
  flex-direction: column;
  gap: 2.3rem;
  height: 94vh;
  
}
.menu--list a{
  color: #27374d;
}
.menu--list .item:hover a{
  
  color: #dde6ed !important;
}

.logo{
  text-align: center;
  padding: 20px;
  color: #27374d;
  align-items: center;
  display: flex;
  gap: 20px;
}
.logo-icon{
  font-size: 1.8rem;
}
.icon{
  font-size: 1.5rem;
}
.menu--list .item{
  display: flex;
  align-items: center;
  gap: 20px;
  font-size: 1.2rem;
  text-decoration: none;
  font-weight: 600;
  padding: 20px;
  border-radius: 10px;
  transition: 0.3s ease-in-out;
  color: #27374d;
  }

.menu--list .item:hover{
  background: #27374d;
  color: #dde6ed;
}

.active{
  background: #27374d;
  color: #dde6ed !important;
}
.sidelogo{
  display: flex;
  width: 200px;
}
.logofix{
  margin-top: 40px;
}

.dashboard{
  display: flex;
  gap: 20px;
}

.dashboard--content{
  background: #fff;
  flex: 1;
  border-radius: 20px;
  padding: 2rem;
  display: flex;
  gap: 1.5rem;
  justify-content: space-between;
}

.content {
  width: 75%;
}

.content--header{
  margin-top: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.header--title{
  color: #526d82;
}

.header--activity{
  display: flex;
  align-items: center;
  gap: 20px;
}

.card--container{
  display: flex;
  gap: 20px;
  align-items: center;
  margin-top: 2rem;
}

.card{
  flex: 1;
  background: #dde6ed;
  padding: 20px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 20px;
  transition: 0.5s ease-in-out;
}

.card:hover{
  transform: scale(1.04);
  cursor: pointer;
}

.card--cover{
  background: #fff;
  font-size: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  border-radius: 20px;
  color: #969393;
}

.card--title{
  background: #ffffffc0;
  width: 100%;
  text-align: center;
  padding: 10px 0px;
  font-size: 14px;
  color: #526d82;
  border-radius: 10px;
}
.list--header{
  display: flex;
  margin: 2rem 0;
  justify-content: space-between;
}
.list--header h2{
  color: #526d82;
}

.list h2 {
  margin: 0;
  font-size: 25px;
  /* Defina um tamanho fixo para o contêiner da marca */
  width: 480px; /* Ajuste conforme necessário */
  overflow: hidden; /* Esconda o texto que extrapola o contêiner */
  white-space: nowrap; /* Impede a quebra de linha do texto */
  text-overflow: ellipsis; /* Adiciona reticências para indicar que o texto foi cortado */
}
.list--header select{
  border-radius: 10px;
  border: none;
  padding: 8px 12px;
  border: 1px solid #dde6ed;
  color: #526d82;

}
.list{
  display: flex;
  padding: 10px;
  align-items: center;
  border-radius: 10px;
  justify-content: space-between;
  transition: 0.3s ease-in-out;
}

.list--container{
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.teacher--detail{
  display: flex;
  align-items: center;
  gap: 20px;
  color: #526d82;
}

.pessoas--detail{
  display: flex;
  align-items: center;
  gap: 20px;
  color: #526d82;
}

.list--container--marcas{
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.list--marcas h2 {
  margin: 0;
  font-size: 25px;
  /* Defina um tamanho fixo para o contêiner da marca */
  width: 480px; /* Ajuste conforme necessário */
  overflow: hidden; /* Esconda o texto que extrapola o contêiner */
  white-space: nowrap; /* Impede a quebra de linha do texto */
  text-overflow: ellipsis; /* Adiciona reticências para indicar que o texto foi cortado */
}
.list--marcas{
  display: flex;
  padding: 10px;
  align-items: center;
  border-radius: 10px;
  justify-content: space-between;
  transition: 0.3s ease-in-out;
  
}

.marcas--list{

  align-items: center;
  gap: 20px;
  color: #526d82;
  margin: 70px;
}

.list--marcas:hover{
  background: #f0f2f5;
  border-radius: 10px;
}

.marcas--detail{
  display: flex;
  align-items: center;
  gap: 20px;
  color: #526d82;
}


.teacher--detail img{
  width: 50px;
  background: #dde6ed;
  border-radius: 50%;
}
.list:hover{
  background: #f0f2f5;
  border-radius: 10px;
}

.profile{
  flex: 1;
}

.profile--header{
  display: flex;
  align-item: center;
  justify-content: space-between;
  margin-top: 40px;
}
.edit{
  background: #dde6ed;
  padding: 12px;
  border-radius: 10px;
  color: #969393;
  display: flex;
  align-items: center;
  justify-content: center;
}
.edit .icon{
  font-size 20px;
  transition: 0,5s ease-in-out;
}
.user--detail{
  width: 100%;
  height: 250px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.user--detail img{
  width: 150px;
  background: #fff;
  border-radius: 50%;
  margin-bottom: 10px;
}
.user--detail .username{
  color: #526d82;
}
.user--profile{
  height: 72%;
  margin-top: 2.9rem;
  background: #dde6ed;
  border-radius: 10px;
  padding: 10px;
  display: flex;
  flex-direction: column;
}
.user--infos{
  background: #fff;
  flex: 1;
  border-radius: 10px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  height: 100%;
}
.infos{
  background: #dde6ed;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 10px;
  
}
.infos-detail{
  display: flex;
  gap: 20px;
  align-items: center;
}
.infos-cover{
  background: #fff;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  font-size: 20x;
}
.infos .duration{
  font-size: 12px;
}

.infos .action{
  font-weight: 900;
  font-size: 1.2rem;
}
.profession{

}
.burger{
  display: none;
}
.burguer--topbar{
  display: none;
}
.logoapp{
  display: none;
}
/* Estilizando TextField */
.MuiTextField-root .MuiInputBase-root {
  font-family: 'Poppins', sans-serif !important;
}
/* CSS */
.pesquisa {
  width: 75%;
}

.form-container {
  width: 95%;
  height: 69.5%;
  padding: 20px;
  background: #dde6ed;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-align: center;
  margin-top: 2rem;
}

.row {
  display: flex;
  flex-wrap: nowrap;
  margin-bottom: 15px; /* Adiciona margem na parte inferior para separar cada linha */
  margin-top: 3rem;
}

.col {
  width: 50%; /* Cada coluna ocupa 50% da largura da linha */
  padding: 0 20px; /* Adiciona um espaçamento interno para separar os campos */
}

/* Estilo para os campos de entrada e seletores */
.form-container input[type="text"]{
  width: 100%; /* Os campos ocupam toda a largura da coluna */
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
}
.form-container input[type="number"]{
  width: 100%; /* Os campos ocupam toda a largura da coluna */
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
}
.form-container select {
  width: 104%; /* Os campos ocupam toda a largura da coluna */
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

/* Estilo para os rótulos */
label {
  margin-bottom: 5px; /* Adiciona um pequeno espaço entre os rótulos */
  font-weight: bold;
  display: block; /* Faz com que os rótulos ocupem toda a largura da coluna */
}

/* Estilo para o botão */
button[type="submit"] {
  background-color: #007bff;
  color: #fff;
  padding: 20px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-top: 30px; /* Adiciona um pequeno espaço acima do botão */
  
}

button[type="submit"]:hover {
  background-color: #0056b3;
}
.date-picker-container {
  width: 100%; /* Defina a largura conforme necessário */
}

.date-picker-input {
  /* Estilos para o campo de entrada do DatePicker */
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  /* Adicione mais estilos conforme necessário */
}
.modal-container{
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.5);
}
.modal-content{
  margin-bottom: 2rem;
}
.modal-header{
  display: flex;
  justify-content: center;
}
.modal-close{
  display: flex;
  justify-content: flex-end;
  font-size: 2rem;
}
.pesquisas-atribuidas-container {
  border: 1px solid #ccc; /* Adiciona uma borda de 1px sólida com a cor cinza */
  border-radius: 8px; /* Adiciona cantos arredondados à borda */
  padding: 10px; /* Adiciona um espaço interno para afastar o conteúdo da borda */
  background-color: white;
}
.select-background {
  background-color: #fff; /* Define o fundo como branco */
}

.close {
  cursor: pointer; /* Altera o cursor para indicar que é clicável */
  border: none; /* Remove a borda padrão */
  border-radius: 50%; /* Arredonda as bordas para torná-lo mais parecido com um botão */
  padding: 5px; /* Adiciona algum espaço interno para torná-lo visualmente mais agradável */
}

/* Estilo para as pesquisas atribuídas */
.pesquisa-atribuida {
  font-size: 14px; /* Ajusta o tamanho do texto */
  background-color: #dde6ed; /* Define o fundo */
  border-radius: 8px; /* Cantos arredondados */
  padding: 20px; /* Preenchimento interno */
  width: 250px; /* Largura */
  margin-bottom: 16px; /* Espaçamento inferior entre as pesquisas */
  margin-left: auto; /* Alinha os cards ao centro */
  margin-right: auto; /* Alinha os cards ao centro */
  text-align: left; /* Alinha o texto à esquerda */
  display: flex; /* Torna os cards flexíveis */
  justify-content: center; /* Centraliza os cards horizontalmente */
}

/* Estilo para o conteúdo das pesquisas atribuídas */
.pesquisa-atribuida-content {
  width: 100%; /* O conteúdo ocupa toda a largura do card */
}

/* Estilo para tornar o texto em negrito */
.pesquisa-atribuida strong {
  font-weight: bold;
}

/* Estilo para o select de pesquisas */
#pesquisa-select {
  width: 100%; /* Ajuste a largura conforme necessário */
  max-height: 300px; /* Define a altura máxima */
  overflow-y: auto; /* Adiciona scroll vertical */
}

.info-container {
  text-align: left;
}

.info-container p {
  margin-left: 70px; /* Adicione a margem inferior desejada */
}

.info {
  margin-top: 15px; /* Adicione a margem superior desejada */
  margin-bottom: 20px; /* Adicione a margem inferior desejada */
  
}

.info-header {
  font-size: 1.8rem; /* Defina o tamanho do texto conforme desejado */
  margin-top: 10px; /* Adicione a margem superior desejada */
  margin-bottom: 10px; /* Adicione a margem inferior desejada */
  text-align: center;
}


@media (max-width: 600px) {
  .button-container {
    flex-direction: column;
    align-items: center;
    margin-top: 10px;
  }
}
/* styles.css */

/* Estilo para o contêiner da lista de itens de pesquisa */
.pesquisa-list {
  list-style-type: none; /* Remover os marcadores da lista */
  padding: 0; /* Remover o preenchimento padrão */
}

/* Estilo para cada item da pesquisa */
.pesquisa-item {
  background-color: #dde6ed; /* Cor de fundo */
  border-radius: 8px; /* Cantos arredondados */
  margin-bottom: 16px; /* Espaçamento inferior entre os itens */
  padding: 20px; /* Preenchimento interno */
  width: 250px;
  font-size: 14px;
  
}
.pesquisa-card{
  margin-top: 23px;
  display: inline-block;
  padding: 10px 50px 10px 50px;
  margin-left: -10px;
  margin-right: 10px;
}

/* Estilo para o título da pesquisa */
.pesquisa-item h3 {
  margin-top: 0; /* Remover o espaçamento superior padrão */
}

/* Estilo para os parágrafos de detalhes da pesquisa */
.pesquisa-item p {
  margin-top: 8px; /* Espaçamento superior entre os parágrafos */
}

/* Estilo específico para o nome do criador da pesquisa */
.pesquisa-item .created-by {
  font-weight: bold; /* Negrito */
  color: #333; /* Cor do texto */
}

/* Adicione outros estilos globais aqui, se necessário */
@media (max-width: 828px){
  /* Estilos adicionais para dispositivos móveis */

/* Ajustes para o menu */
.menu {
  position: fixed;
  width: 270px;
  left: -270px;
}
.content {
  width: 75%;
}
.dashboard {
  display: flex;
  gap: 10px;
  align-content: space-around;
  align-items: flex-end;
  flex-direction: row;
  flex-wrap: wrap;
}
.dashboard--content {
  justify-content: space-between;
}

/* Estilos para o corpo */
body {
  background: #fff;
}

/* Estilos para os cards */
.card {
  padding: 16px 20px;
  margin: 10px 40px 10px 0px;
}

/* Estilos para o cabeçalho da lista */
.list--header {
  margin-top: 50px;
  display: flex;
  justify-content: space-between; /* Isso alinha os itens à esquerda e à direita */
  align-items: center;
}

.list--header select {
  margin-right: -100px;
}

.list--header h2 {
  margin-right: auto; /* Isso faz com que o h2 ocupe todo o espaço disponível */
}

/* Estilos para o contêiner da lista */
.list--container {
  width: 130%;
  padding: 0;

}

/* Estilos para o cabeçalho do perfil */
.profile--header {
  margin-top: 80px;
}

/* Estilos para o ícone do menu hamburguer */
.burger {
  font-size: 40px;
  display: flex;
}

/* Estilos para o contêiner do menu hamburguer */
.burguer--container {
  background: #dde6ed;
  padding: 15px;
  width: 52px;
  border-radius: 20px;
  display: flex;
  align-items: center;
}

/* Estilos para a logo na versão móvel */
.logoapp {
  display: block;
  width: 200px;
  margin-top: 15px;
  margin-left: 340px;
}

/* Estilos para ocultar a logo na versão móvel */
.sidelogo {
  display: none;
}

/* Estilos para ocultar o perfil na versão móvel */
.profile {
  display: none;
}
.teacher--detail {
  gap: 10px;
  color: #526d82;
}
* {
  /* margin: 0; */
  padding: 0;
  font-family: 'Poppins',sans-serif;
  text-decoration: none;
}
.list:hover {
  background: #f0f2f5;
  border-radius: 10px;

}
.list {
 width: 100%;
 border-collapse: collapse;
}
.header--title {
  margin-top: 90px;
}
.card--container {
  display: flex;
  gap: 20px;
  margin-top: 2rem;
  margin-left: 3.4rem;
  justify-content: space-between;
}
`;

export default GlobalStyles;
