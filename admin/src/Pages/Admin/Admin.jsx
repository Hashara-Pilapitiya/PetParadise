import React from 'react';
import './Admin.css';
import Sidebar from '../../Components/Sidebar/Sidebar';
import { Routes, Route } from 'react-router-dom';
import AddAnimal from '../../Components/AddAnimal/AddAnimal';
import AnimalList from '../../Components/AnimalList/AnimalList';

const Admin = () => {
  return (

    <div className='admin'>

      <Sidebar />

      <Routes>
          
          <Route path='/addanimal' element={<AddAnimal />} />
          <Route path='/listanimal' element={<AnimalList />} />

      </Routes>

    </div>

  )
}

export default Admin;