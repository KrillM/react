import React, { useState } from "react";
import img1 from "./ex/1.png"
import img2 from "./ex/2.jpg"
import img3 from "./ex/3.jpg"
import img4 from "./ex/4.jpg"

const Silsup5 = () => {
  const [name, setName] = useState("");
  const handleEnter = (e) => {
    if(e.key == 'Enter'){
      console.log("Enter pressed")
    }
  }

  const [selectedColor, setSelectedColor] = useState('black');
  const changeBackgroundColor = (e) => {
    setSelectedColor(e.target.value);
  };

  const [textColor, setTextColor] = useState('black');
  const changeTextColor = (e) => {
    setTextColor(e.target.value);
  };

  const [picture, setPicture] = useState('1');

  const pictureChange = (event) => {
    setPicture(event.target.value);
  };

  const getImageSrc = () => {
    switch (picture) {
      case '1':
        return img1;
      case '2':
        return img2;
      case '3':
        return img3;
      case '4':
        return img4;
      default:
        return '';
    }
  };

  return (
    <div class="Silsup5__design">
      <br/>
      사진 <select id="pic" name="pic" onChange={pictureChange} value={picture}>
        <option value="1">mk2</option>
        <option value="2">맥북</option>
        <option value="3">라면</option>
        <option value="4">테슬라</option>
      </select>
      배경색 <select id="backColor" name="backColor" onChange={changeBackgroundColor} value={selectedColor}>
        <option value="black">검정</option>
        <option value="red">빨강</option>
        <option value="yellow">노랑</option>
        <option value="blue">파랑</option>
      </select>
      글자색 <select id="glColor" name="glColor" onChange={changeTextColor} value={textColor}>
      <option value="black">검정</option>
        <option value="red">빨강</option>
        <option value="yellow">노랑</option>
        <option value="blue">파랑</option>
      </select>
      <br/>
      <br/>
      내용 <input type="text" value={name} onChange={(e) => {setName(e.target.value)}} onKeyDown={handleEnter}/>
      <br/>
      <br/>
      <span class="Silsup5_name" style={{ backgroundColor: selectedColor, color: textColor }}>
        {name}
      </span>
      <br/>
      <br/>
      <div>
        <img src={getImageSrc()} alt="Selected" />
      </div>
    </div>
  );    
}

export default Silsup5;