import Head from 'next/head'
import { useState } from 'react'
import styles from '../styles/Home.module.css'

export default function Home() {

  const [topleft, setLeftRadius] = useState()
  const [topRight, setRightRadius] = useState()
  const [bottomleft, setLeftBRadius] = useState()
  const [bottomRight, setRighttBRadius] = useState()
  const [useColor, setBgColor] = useState();
  const [styled, setCss] = useState([]);

  const HandlerGetStyle = () => {
    let data = new Object;
    const css = document.getElementById('Radius');
    const style = getComputedStyle(css)
    data.width = style.width;
    data.heigth = style.height;
    data.border = style.border;
    data.borderTopLeftRadius = style.borderTopLeftRadius;
    data.borderTopRightRadius = style.borderTopRightRadius;
    data.borderBottomLeftRadius = style.borderBottomLeftRadius;
    data.borderBottomRightRadius = style.borderBottomRightRadius;

    setCss(data)
    alert('Seu CSS foi gerado com sucésso !')
  }


  return (
    <div className={styles.container} style={{ backgroundColor: useColor ? `#${useColor}` : '#cecece' }} >
      <h1>Trabalhando com Background e BorderRadius Dinâmicas</h1>
      <div className={styles.BackgroundGroud}>
        <label htmlFor="bgcolor">Adicione um código Hexadecimal da cor:</label>
        <div className={styles.inputHash}>
          <span>#</span>
        <input name="bgcolor" className={styles.inputColor} type="text" placeholder="BackgroundColor" onChange={event => (setBgColor(event.target.value))} />
        </div>
        
      </div>
      <button className={styles.geratebtn} onClick={HandlerGetStyle}>Gerar Código CSS</button>
      <div id="Radius" className={styles.EditableRadius} style={{ borderTopLeftRadius: topleft ? parseInt(topleft) : 0, borderTopRightRadius: topRight ? parseInt(topRight) : 0, borderBottomLeftRadius: bottomleft ? parseInt(bottomleft) : 0, borderBottomRightRadius: bottomRight ? parseInt(bottomRight) : 0 }} >
        <div className={styles.topInputs}>
          <input type="number" onChange={event => (setLeftRadius(event.target.value))} />
          <input type="number" onChange={event => (setRightRadius(event.target.value))} />
        </div>
        <span>width: {styled.width};</span>
        <span>heigth: {styled.heigth};</span>
        <span>border: {styled.border};</span>
        <span>borderTopLeftRadius:  {styled.borderTopLeftRadius}</span>
        <span>borderTopRightRadius: {styled.borderTopRightRadius}</span>
        <span> borderBottomLeftRadius: {styled.borderBottomLeftRadius}</span>
        <span> borderBottomRightRadius: {styled.borderBottomRightRadius}</span>
        <div className={styles.bottomInputs}>
          <input type="number" onChange={event => (setLeftBRadius(event.target.value))} />
          <input type="number" onChange={event => (setRighttBRadius(event.target.value))} />
        </div>
      </div>
    </div>
  )
}
