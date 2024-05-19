import React from 'react'
import { BiHome, BiSolidReport, BiSolidGroup, BiSearch } from "react-icons/bi";
import '../styles/sidebar.css';
import ImageLogo from '../assetstemp/pesquisa.png'
import { Link } from "react-router-dom";

const Sidebar = () => {
  return <div className='menu'>
    <div className='logofix'>
        <img className="sidelogo" src={ImageLogo} alt=""/>
    </div>
    <div className="menu--list">
        <Link to="/home">
        <a className="item">
        <BiHome className='icon'/>
        Dashboard
        </a>
        </Link>
        <Link to="/pesquisas">
        <a className="item">
        <BiSearch className='icon'/>
        Pesquisas
        </a>
        </Link>
        <Link to="/marcas">
        <a className="item"> 
        <BiHome className='icon'/>
        Marcas
        </a>
        </Link>
        <Link to="/pessoas">
        <a className="item">
        <BiSolidGroup className='icon'/>
        Pessoas
        </a>
        </Link>
        <Link to="/report">
        <a className="item">
        <BiSolidReport className='icon'/>
        Report
        </a>
        </Link>
    </div>
  </div>
};

export default Sidebar