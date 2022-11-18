import React from 'react';
import { Card, Col, Row } from 'antd';
import { Image ,Input,Typography} from 'antd';
import pe3 from '../assets/pe3.jpeg';
import pe2 from '../assets/pe2.jpeg';
import pe5 from '../assets/pe5.jpeg';
import pe7 from '../assets/pe7.jpeg';
import p5 from '../assets/p5.jpeg';
import pv2 from '../assets/pv2.jpeg';
import pv3 from '../assets/pv3.jpeg';
import pv4 from '../assets/pv4.jpeg';
import p1 from '../assets/p1.jpeg';
import p2 from '../assets/p2.jpeg';
import d from '../assets/d.jpeg';







const onSearch = (value) => console.log(value);

const { Search } = Input;

const { Title } = Typography;


const Perruque = () => (

    <div className="site-card-wrapper" style={{marginTop:"3%",margin:"6%",marginRight:27}}>
    <Row gutter={16}>
      <Col span={8}>
        <Image
        src={pe2}
    width={"50%"}
    style={{marginLeft:20,marginRight:20}}
        />

        <Input placeholder="23000F" style={{marginTop:"5%",width:"20%",marginLeft:"-5%"}}/>
        <Title level={5} style={{marginLeft:"10%",marginTop:6,color:"#002170"}}></Title>
      </Col>
        

      <Col span={8}>
        <Image
        src={pe3}
    width={"50%"}
    style={{marginLeft:20,marginRight:20}}
        />

        <Input placeholder="30000F" style={{marginTop:"5%",width:"20%",marginLeft:"-5%"}}/>
        <Title level={5} style={{marginLeft:"10%",marginTop:6,color:"#002170"}}></Title>
      </Col>



      <Col span={8}>
        <Image
        src={pe5}
    width={"50%"}
    style={{marginLeft:20,marginRight:20}}
        />

        <Input placeholder="25000F" style={{marginTop:"5%",width:"20%",marginLeft:"-5%"}}/>
        <Title level={5} style={{marginLeft:"10%",marginTop:6,color:"#002170"}}></Title>
      </Col>
        
      <Col span={8}>
        <Image
        src={pv3}
    width={"50%"}
    style={{marginLeft:20,marginRight:20,marginTop:70}}
        />

        <Input placeholder="23000F" style={{marginTop:"5%",width:"20%",marginLeft:"-5%"}}/>
        <Title level={5} style={{marginLeft:"10%",marginTop:6,color:"#002170"}}></Title>
      </Col>


      <Col span={8}>
        <Image
        src={p1}
    width={"50%"}
    style={{marginLeft:20,marginRight:20,marginTop:70}}
        />

        <Input placeholder="25000F" style={{marginTop:"5%",width:"20%",marginLeft:"-5%"}}/>
        <Title level={5} style={{marginLeft:"10%",marginTop:6,color:"#002170"}}></Title>
      </Col>


      <Col span={8}>
        <Image
        src={pv4}
        width={"54%"}
        style={{marginLeft:30,marginRight:20,marginTop:70}}
        />
        <Input placeholder="25000F" style={{marginTop:"5%",width:"20%",marginLeft:"-5%"}}/>
        <Title level={5} style={{}}></Title>
        </Col>
        


        <Col span={8}>
        <Image
        src={p2}
        width={"50%"}
        style={{marginLeft:30,marginRight:20,marginTop:70}}
        />
        <Input placeholder="40000F" style={{marginTop:"5%",width:"20%",marginLeft:"-5%"}} />
        <Title level={5} style={{}}></Title>
      </Col>

      <Col span={8}>
      <Image
        src={p5}
        width={"50%"}
        style={{marginLeft:30,marginRight:20,marginTop:70}}
        />
        <Input placeholder="42000F" style={{marginTop:"5%",width:"20%",marginLeft:"-5%"}} />
        <Title level={5} style={{}}></Title>
      </Col>

      <Col span={8}>
      <Image
        src={d}
        width={"45%"}
        style={{marginLeft:30,marginRight:20,marginTop:70}}
        />
        <Input placeholder="20000F" style={{marginTop:"5%",width:"20%",marginLeft:"-5%"}} />
        <Title level={5} style={{}}></Title>
      </Col>
    </Row>
  </div>
    
    
    

);
export default Perruque;