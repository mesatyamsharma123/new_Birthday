import React from 'react'
import useWindowSize from 'react-use/lib/useWindowSize'
import Confetti from 'react-confetti'
import '../css/Home.css';
import { Link } from 'react-router-dom';


const Home = () => {
const { width, height } = useWindowSize()

  return (
    <div className="container">
     <Confetti
      width={width}
      height={height}
      gravity={0.03}
    />

   <p ><h1 style={{color: 'white'}}> Friends are the best</h1>
<h5 className="pp"> <Link to='/slider'  style={{color: 'black'}}> Lets Continue</Link></h5></p>
    </div>
  )
}

export default Home
