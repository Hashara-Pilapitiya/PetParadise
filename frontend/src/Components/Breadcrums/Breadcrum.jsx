import React from 'react';
import './Breadcrum.css';
import { IoMdArrowRoundForward } from "react-icons/io";

const Breadcrum = (props) => {

    const { animal } = props;

  return (

     <div className='breadcrum'>
        Home <span><IoMdArrowRoundForward /></span> Shop <span><IoMdArrowRoundForward /></span> {animal.category} <span><IoMdArrowRoundForward /></span> {animal.name}
    </div>
  )
}

export default Breadcrum;