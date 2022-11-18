import React from 'react';
import { Card, Col, Row } from 'antd';
import { Image ,Input,Typography} from 'antd';
import r1 from '../assets/r1.jpeg';
import r2 from '../assets/r2.jpeg';
import r3 from '../assets/r3.jpeg';
import r4 from '../assets/r4.jpeg';
import r5 from '../assets/r5.jpeg';
import r6 from '../assets/r6.jpeg';
import r7 from '../assets/r7.jpeg';
import r8 from '../assets/r8.webp';
import r9 from '../assets/r9.jpeg';
import r10 from '../assets/r10.jpeg';
import rr1 from '../assets/rr1.jpeg';
import rr2 from '../assets/rr2.jpeg';
import rr4 from '../assets/rr4.webp';
import rr5 from '../assets/rr6.jpeg';
import rr6 from '../assets/r10.jpeg';













const onSearch = (value) => console.log(value);

const { Search } = Input;

const { Title } = Typography;


const Robes = () => (

    <div className="site-card-wrapper" style={{marginTop:"3%",margin:"6%",marginRight:27}}>
    <Row gutter={16}>
      <Col span={8}>
        <Image
        src={r8}
    width={"50%"}
    style={{marginLeft:20,marginRight:20}}
        />

        <Input placeholder="23000F" style={{marginTop:"5%",width:"20%",marginLeft:"-5%"}}/>
        <Title level={5} style={{marginLeft:"10%",marginTop:6,color:"#002170"}}></Title>
      </Col>
        

      <Col span={8}>
        <Image
        src={r1}
    width={"50%"}
    style={{marginLeft:20,marginRight:20}}
        />

        <Input placeholder="30000F" style={{marginTop:"5%",width:"20%",marginLeft:"-5%"}}/>
        <Title level={5} style={{marginLeft:"10%",marginTop:6,color:"#002170"}}></Title>
      </Col>



      <Col span={8}>
        <Image
        src={rr1}
    width={"45%"}
    height={"80%"}
    style={{marginLeft:20,marginRight:20}}
        />

        <Input placeholder="25000F" style={{marginTop:"5%",width:"20%",marginLeft:"-5%"}}/>
        <Title level={5} style={{marginLeft:"10%",marginTop:6,color:"#002170"}}></Title>
      </Col>
        
      <Col span={8}>
        <Image
        src={rr2}
    width={"50%"}
    style={{marginLeft:20,marginRight:20,marginTop:70}}
        />

        <Input placeholder="23000F" style={{marginTop:"5%",width:"20%",marginLeft:"-5%"}}/>
        <Title level={5} style={{marginLeft:"10%",marginTop:6,color:"#002170"}}></Title>
      </Col>


      <Col span={8}>
        <Image
        src={rr4}
    width={"50%"}
    style={{marginLeft:20,marginRight:20,marginTop:70}}
        />

        <Input placeholder="25000F" style={{marginTop:"5%",width:"20%",marginLeft:"-5%"}}/>
        <Title level={5} style={{marginLeft:"10%",marginTop:6,color:"#002170"}}></Title>
      </Col>


      <Col span={8}>
        <Image
        src={rr5}
        width={"54%"}
        style={{marginLeft:30,marginRight:20,marginTop:70}}
        />
        <Input placeholder="25000F" style={{marginTop:"5%",width:"20%",marginLeft:"-5%"}}/>
        <Title level={5} style={{}}></Title>
        </Col>
        


        <Col span={8}>
        <Image
        src={rr6}
        width={"50%"}
        style={{marginLeft:30,marginRight:20,marginTop:70}}
        />
        <Input placeholder="40000F" style={{marginTop:"5%",width:"20%",marginLeft:"-5%"}} />
        <Title level={5} style={{}}></Title>
      </Col>

      <Col span={8}>
      <Image
        src={r9}
        width={"50%"}
        style={{marginLeft:30,marginRight:20,marginTop:70}}
        />
        <Input placeholder="42000F" style={{marginTop:"5%",width:"20%",marginLeft:"-5%"}} />
        <Title level={5} style={{}}></Title>
      </Col>

      <Col span={8}>
      <Image
        src={r10}
        width={"45%"}
        style={{marginLeft:30,marginRight:20,marginTop:70}}
        />
        <Input placeholder="20000F" style={{marginTop:"5%",width:"20%",marginLeft:"-5%"}} />
        <Title level={5} style={{}}></Title>
      </Col>
    </Row>
  </div>
    
    
    

);
export default Robes;
