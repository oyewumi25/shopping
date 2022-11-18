import React from 'react';
import { Card, Col, Row } from 'antd';
import { Image ,Input,Typography} from 'antd';
import s3 from '../assets/s3.jpeg';
import s4 from '../assets/s4.jpeg';
import s6 from '../assets/s6.jpeg';
import s8 from '../assets/s8.jpeg';
import s9 from '../assets/s9.jpeg';
import s7 from '../assets/s7.jpeg';
import m1 from '../assets/m1.jpeg';
import m3 from '../assets/m3.jpeg';
import m5 from '../assets/m5.jpeg';
import l3 from '../assets/l3.jpeg';
import vl1 from '../assets/vl1.jpeg';
import vl2 from '../assets/vl2.jpeg';



const onSearch = (value) => console.log(value);

const { Search } = Input;

const { Title } = Typography;


const Soie = () => (

    <div className="site-card-wrapper" style={{marginTop:"3%",margin:"6%",marginRight:27}}>
    <Row gutter={16}>
      <Col span={8}>
        <Image
        src={s3}
    width={"50%"}
    style={{marginLeft:20,marginRight:20}}
        />

        <Input placeholder="13000F" style={{marginTop:"5%",width:"20%",marginLeft:"-5%"}}/>
        <Title level={5} style={{marginLeft:"10%",marginTop:6,color:"#002170"}}></Title>
      </Col>
        

      <Col span={8}>
        <Image
        src={s4}
    width={"50%"}
    style={{marginLeft:20,marginRight:20}}
        />

        <Input placeholder="11000F" style={{marginTop:"5%",width:"20%",marginLeft:"-5%"}}/>
        <Title level={5} style={{marginLeft:"10%",marginTop:6,color:"#002170"}}></Title>
      </Col>



      <Col span={8}>
        <Image
        src={s6}
    width={"50%"}
    style={{marginLeft:20,marginRight:20}}
        />

        <Input placeholder="11000F" style={{marginTop:"5%",width:"20%",marginLeft:"-5%"}}/>
        <Title level={5} style={{marginLeft:"10%",marginTop:6,color:"#002170"}}></Title>
      </Col>
        
      <Col span={8}>
        <Image
        src={s8}
    width={"50%"}
    style={{marginLeft:20,marginRight:20,marginTop:70}}
        />

        <Input placeholder="13000F" style={{marginTop:"5%",width:"20%",marginLeft:"-5%"}}/>
        <Title level={5} style={{marginLeft:"10%",marginTop:6,color:"#002170"}}></Title>
      </Col>


      <Col span={8}>
        <Image
        src={vl2}
    width={"50%"}
    style={{marginLeft:20,marginRight:20,marginTop:70}}
        />

        <Input placeholder="12000F" style={{marginTop:"5%",width:"20%",marginLeft:"-5%"}}/>
        <Title level={5} style={{marginLeft:"10%",marginTop:6,color:"#002170"}}></Title>
      </Col>


      <Col span={8}>
        <Image
        src={vl1}
        width={"50%"}
        style={{marginLeft:30,marginRight:20,marginTop:70}}
        />
        <Input placeholder="11000F" style={{marginTop:"5%",width:"20%",marginLeft:"-5%"}}/>
        <Title level={5} style={{}}></Title>
        </Col>
        


        <Col span={8}>
        <Image
        src={m1}
        width={"45%"}
        style={{marginLeft:30,marginRight:20,marginTop:70}}
        />
        <Input placeholder="20000F" style={{marginTop:"5%",width:"20%",marginLeft:"-5%"}} />
        <Title level={5} style={{}}></Title>
      </Col>

      <Col span={8}>
      <Image
        src={m3}
        width={"43%"}
        style={{marginLeft:30,marginRight:20,marginTop:70}}
        />
        <Input placeholder="20000F" style={{marginTop:"5%",width:"20%",marginLeft:"-5%"}} />
        <Title level={5} style={{}}></Title>
      </Col>

      <Col span={8}>
      <Image
        src={m5}
        width={"55%"}
        style={{marginLeft:30,marginRight:20,marginTop:70}}
        />
        <Input placeholder="20000F" style={{marginTop:"5%",width:"20%",marginLeft:"-5%"}} />
        <Title level={5} style={{}}></Title>
      </Col>
    </Row>
  </div>
    
    
    

);
export default Soie;