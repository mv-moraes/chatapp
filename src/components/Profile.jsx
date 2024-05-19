import React from 'react';
import ProfileHeader from './ProfileHeader';
import '../styles/global';
import userImage from '../assetstemp/transferir.jpg'
import { BiBook } from 'react-icons/bi';

const infos= [
  {
    title: 'Pesquisa',
    duration: '2 Hours',
    icon: <BiBook />
  },
  {
    title: 'Pesquisa',
    duration: '2 Hours',
    icon: <BiBook />
  },
  {
    
    title: 'Pesquisa',
    duration: '2 Hours',
    icon: <BiBook />
  },
]

const Profile = () => {
  return (
  
  <div className='profile'>
    <ProfileHeader />
    <div className='user--profile'>
      <div className='user--detail'>
        <img className='user--photo' src="" />
        <h3 className='username'>Usuario</h3>
      </div>
      
      <div className='user--infos'>
        {infos.map((infos) => (
          <div className='infos'>
            <div className='infos-detail'>
              <div className='infos-cover'>{infos.icon}</div>
              <div className='infos-name'>
                <h5 className='title'>{infos.title}</h5>
                <span className='duration'>{infos.duration}</span>
              </div>
            </div>
            <div className="action">:</div>
          </div>
        ))}
      </div>
    </div>
  </div>
  );
};

export default Profile