import React, { useState } from 'react';
import '../slider/Silder.css'
import useWindowSize from 'react-use/lib/useWindowSize';
import Confetti from 'react-confetti';
import img1 from '../../assets/img2.jpg';
import img2 from '../../assets/img3.jpg';
import img3 from '../../assets/img4.jpg';
import img4 from '../../assets/IMG_20240520_162555.jpg';
import img6 from '../../assets/img6.jpg';
import { useNavigate } from 'react-router-dom';

const Slider = () => {
  const { width, height } = useWindowSize();
  const [items, setItems] = useState([
    { name: 'india', img: img6, des: 'Description for India', link: '/detail' },
    { name: 'america', img: img1, des: 'Description for America', link: '/detail1' },
    { name: 'landon', img: img2, des: 'Description for Landon', link: '/detail2' },
    { name: 'USA', img: img3, des: 'Description for USA', link: '/detail3' },
    { name: 'elin', img: img4, des: 'Description for Elin', link: '/detail4' },
   
  ]);

  const handleNext = () => {
    setItems((prevItems) => {
      const [first, ...rest] = prevItems;
      return [...rest, first];
    });
  };

  const handlePrev = () => {
    setItems((prevItems) => {
      const last = prevItems[prevItems.length - 1];
      const rest = prevItems.slice(0, prevItems.length - 1);
      return [last, ...rest];
    });
  };



  const navigate = useNavigate();

  return (
    <div className="l">
      <div className="slide">
        <Confetti width={width} height={height} gravity={0.03} />
        {items.map((item, index) => (
          <div className="item" key={index} style={{ backgroundImage: `url(${item.img})` }}>
            <div className="c">
              <div className="name">{item.name}</div>
              <div className="des">{item.des}</div>
              <button onClick={() => navigate(item.link)}>See More</button>
            </div>
          </div>
        ))}
      </div>
      <div className="button">
        <button className="prev" onClick={handlePrev}>
          <i className="material-icons">&#xe863;</i>
        </button>
        <button className="next" onClick={handleNext}>
          <i className="material-icons">&#xe8e4;</i>
        </button>
      </div>
    </div>
  );
};

export default Slider;
