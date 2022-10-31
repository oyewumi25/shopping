import React, { Component } from 'react'
import { Image ,Card} from 'antd';
import 'antd/dist/antd.css';
import donsharp11 from '../assets/donsharp11.png';
const { Meta } = Card;


export class First extends Component {
  render() {
    return (
      <div style={{backgroundImage: `url("${donsharp11}")`,backgroundAttachment:"fixed",
      backgroundRepeat:"no-repeat",color:"white",height:"100vh",width:"100%"}}>
      <p><b>Donsharp de Batoro</b></p>
      <h2>Black Memory Quiz</h2>
      <p>participez et gagnez 200000 FCFA en cash et de nombreux lots</p>
      
      </div>
    )
  }
}

export default First