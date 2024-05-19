import React from 'react';
import '../styles/global'; // Supondo que 'global.css' contém estilos globais
import { RxHamburgerMenu } from "react-icons/rx";
import ImagemLogo from '../assetstemp/pesquisa.png';

const MarcasHeader = () => {
    return(
    <div>
    <div className='content--header'>
      
      <div className='burguer--container'>
        <RxHamburgerMenu className='burger' />
        
      </div>
      <img className='logoapp' src={ImagemLogo} alt="logo" />
      </div>
      <div>
        <h1 className='header--title'>Marcas</h1>
        <div className='header--activity'></div>
      </div>
      <div>
        
      </div>
    </div>
  );
}

export default MarcasHeader

