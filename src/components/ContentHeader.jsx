import React from 'react';
import '../styles/global'; // Supondo que 'global.css' contém estilos globais
import { RxHamburgerMenu } from "react-icons/rx";
import ImagemLogo from '../assetstemp/pesquisa.png';

const ContentHeader = () => {
  return (
    <div>
    <div className='content--header'>
      
      <div className='burguer--container'>
        <RxHamburgerMenu className='burger' />
        
      </div>
      <img className='logoapp' src={ImagemLogo} alt="logo" />
      </div>
      <div>
        <h1 className='header--title'>Dashboard</h1>
        <div className='header--activity'></div>
      </div>
    </div>
  );
}

export default ContentHeader;
