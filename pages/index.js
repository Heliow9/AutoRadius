import Head from 'next/head'
import { useState } from 'react'
import styles from '../styles/Home.module.css'

export default function Home() {

  const [topleft, setLeftRadius] = useState()
  const [topRight, setRightRadius] = useState()
  const [bottomleft, setLeftBRadius] = useState()
  const [bottomRight, setRighttBRadius] = useState()
  const [useColor, setBgColor] = useState();
 
  const HandlerGetStyle = () =>{
   
  }


  return (
<div className={styles.container} style={{ backgroundColor: useColor ? `#${useColor}` : '#cecece' }} >
      <h1>Trabalhando com Background e BorderRadius Dinâmicas</h1>
    <div className={styles.BackgroundGroud}>
      <label htmlFor="bgcolor">Adicione um código Hexadecimal da cor:</label>
      <input name="bgcolor" className={styles.inputColor} type="text" placeholder="BackgroundColor" onChange={event => (setBgColor(event.target.value))} />
    </div>
      <button className={styles.geratebtn} onClick={HandlerGetStyle}>Gerar Código CSS</button>
      <div id="Radius" className={styles.EditableRadius} style={{ borderTopLeftRadius: topleft ? parseInt(topleft) : 0, borderTopRightRadius: topRight ? parseInt(topRight) : 0, borderBottomLeftRadius: bottomleft ? parseInt(bottomleft) : 0, borderBottomRightRadius: bottomRight ? parseInt(bottomRight) : 0 }} >
        <div className={styles.topInputs}>
          <input type="number" onChange={event => (setLeftRadius(event.target.value))} />
          <input type="number" onChange={event => (setRightRadius(event.target.value))} />

        </div>
        <h3>Resul</h3>
        <div className={styles.bottomInputs}>
          <input type="number" onChange={event => (setLeftBRadius(event.target.value))} />
          <input type="number" onChange={event => (setRighttBRadius(event.target.value))} />
        </div>
      </div>
    </div>
  )
}
