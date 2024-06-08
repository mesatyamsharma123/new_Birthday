import React, { useState } from 'react'
import './Detail.css';
import img from "../../assets/img4.jpg";
const Detail3 = () => {
  const [name,setName]=useState("love");
const [job,setJob]=useState("l");
const [about,setAbout]=useState("Main Aapke Pyaar ");


  return (
    <div className='Card'>
    <div className='upper-container'>
    <div className='image-container'>

      <img src= {img} alt="" height="100px" width="100px"/>
    </div>
</div>
<div className='lower-container'>
<h3>{'To my Love'}</h3>
<h4>{"From: me"}</h4>
<p>{'Main Aapke Pyaar Mein Kuchh Aisa Kar Jaunga,Ban Kar Khushboo Hawa Mein Bikhar Jaunga,Bhulaana Chaaho Toh Saanson Ko Rok Lena,Saans Loge Toh Main Dil Mein Utar Jaunga'}</p>

</div>
      
    </div>
  )
}

export default Detail3
