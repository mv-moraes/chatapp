import React from 'react'
import { BiBarChartAlt2 } from 'react-icons/bi';



    function mesAtual(){
        const dataAtual = new Date();
        const opcoes = {month: 'long'};
        let mes = new Intl.DateTimeFormat('pt-BR', opcoes).format(dataAtual);
        mes = mes.charAt(0).toUpperCase() + mes.slice(1);
        return mes;
      }
      
      
        const charts = [
          {
            title: `Pesquisas de ${mesAtual()}`,
            icon: <BiBarChartAlt2 />
          },
          {
            title: `Pesquisas de ${mesAtual()}`,
            icon: <BiBarChartAlt2 />
          },
          {
            title: `Pesquisas de ${mesAtual()}`,
            icon: <BiBarChartAlt2 />
          }
        ];
      
const Card = () => {
  return (
    <div className='card--container'>
        {charts.map((item) => (
            <div className='card'>
                <div className="card--cover">{item.icon}</div>
                <div className="card--title">
                    <h3>{item.title}</h3>
                </div>
            </div>
        ))}
    </div>
  )
};


export default Card