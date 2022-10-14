
  import { Layout, Menu,Col, Row,Typography,Input,Breadcrumb} from 'antd';
  import React from 'react';
  import 'antd/dist/antd.css';
  import { Card,Rate } from 'antd';
  import { Image } from 'antd';
  import couverture from '../assets/couverture.jpg';
  import soie1 from '../assets/soie1.jpeg';
  import soie2 from '../assets/soie2.jpeg';
  import soie3 from '../assets/soie3.jpeg';
  import p2 from '../assets/p2.jpeg';
  import p3 from '../assets/p3.jpeg';
  import p5 from '../assets/p5.jpeg';
  import robe1 from '../assets/robe1.jpeg';
  import robe2 from '../assets/robe2.jpeg';
  import jaune from '../assets/jaune.jpeg';
  import { LaptopOutlined,ShoppingCartOutlined, NotificationOutlined, TeamOutlined,UserOutlined } from '@ant-design/icons';
  const { Header, Sider, Content } = Layout;
  const { Title } = Typography;
  const { Meta } = Card;



const onSearch = (value) => console.log(value);

const { Search } = Input;

 
  const Appbar = () => {
   
    return (
      <Layout>
        
        
          
        
        <Layout className="site-layout">    
          
           
    
          <Content
            className="site-layout-background"
            style={{backgroundColor:"white"}}
          >
           
        
          <Search class="search"
      placeholder="Chercher un produit,une marque ou une categorie...."
      allowClear
      style={{width:640,marginTop:35,marginLeft:330,backgroundColor:"orange"}} 
      enterButton ="Rechercher" 
   
      size="large"
      onSearch={onSearch}
    //   style={{width:640,marginTop:35,marginLeft:300,color:"orange"}}
    
    /> 
      <Title style={{marginTop:-40,marginLeft:80}} level={2}>Elegance'shop<ShoppingCartOutlined /></Title>
      <Title style={{float:"right",marginTop:-49,marginRight:180} }level={5}>Se connecter<UserOutlined /></Title>
      <Title style={{float:"right",marginTop:-49,marginRight:310}} level={5}>Panier<ShoppingCartOutlined /></Title>
      <Title  style={{float:"right",marginTop:-49,marginRight:50} }level={5}>Besoin d'aide<TeamOutlined /> 
      </Title>
      
     
      <Image
  
    src={couverture}
    width={"50%"}
    style={{widht:"100vh",marginLeft:30,marginRight:30}}
    
    
  />
    
<Title style={{marginTop:"3%",textAlign:"center"}} level={2}>Bienvenue chez Elegance'Shop</Title>

<Breadcrumb style={{marginLeft:"20%",fontSize:"20px"}}>
    <Breadcrumb.Item>
  
    <a href="">Home</a>
    </Breadcrumb.Item>
    <Breadcrumb.Item>
      <a href="">Soies</a>
    </Breadcrumb.Item>
    <Breadcrumb.Item>
      <a href="">Robes</a>
    </Breadcrumb.Item>
    <a href="">Perruques</a>

    </Breadcrumb>
    

<div className="site-card-wrapper" style={{marginTop:"3%"}}>
    <Row gutter={16}>
      <Col span={8}>
        <Image
        
        src={soie1}
    width={"50%"}
    style={{marginLeft:20,marginRight:20}}
         
        />
 <Input placeholder="12000F" style={{marginTop:"5%",width:"20%",marginLeft:"-5%"}} />
      <Title level={5} style={{marginLeft:"10%",marginTop:6}}>soie lisse en motif extra</Title>
      <Rate style= {{marginLeft:"10%"}}  allowHalf defaultValue={2.5} />
      </Col>
      <Col span={8}>
        <Image
        
        src={soie2}
    width={"50%"}
    style={{marginLeft:30,marginRight:20}}
         
        />
        <Input placeholder="12000F" style={{marginTop:"5%",width:"20%",marginLeft:"-5%"}} />
        <Title level={5} style={{marginLeft:"10%",marginTop:6}}>soie lisse en motif extra</Title>
        <Rate style= {{marginLeft:"10%"}}  allowHalf defaultValue={2.5} />
      </Col>
      <Col span={8}>
       
        <Image
        
        src={soie3}
    width={"50%"}
    style={{marginLeft:20,marginRight:20}}
         
        />
       <Input placeholder="12000F" style={{marginTop:"5%",width:"20%",marginLeft:"-5%"}} />
       <Title level={5} style={{marginLeft:"10%",marginTop:6}}>soie lisse en motif extra</Title>
        <Rate style= {{marginLeft:"10%"}}  allowHalf defaultValue={2.5} />
      </Col>

      
    </Row>
  </div>



  <div className="site-card-wrapper" style={{marginTop:"3%"}}>
    <Row gutter={16}>
      <Col span={8}>
        <Image
        
        src={robe1}
    width={"45%"}
    style={{marginLeft:20,marginRight:20}}
         
        />
        <Input placeholder="12000F" style={{marginTop:"5%",width:"20%",marginLeft:"-5%"}} />
      </Col>

      <Col span={8}>
        <Image
        
        src={robe2}
    width={"50%"}
    style={{marginLeft:30,marginRight:20}}
         
        />
        <Input placeholder="12000F" style={{marginTop:"5%",width:"20%",marginLeft:"-5%"}} />
      </Col>
      <Col span={8}>
       
        <Image
        
        src={jaune}
    width={"50%"}
    style={{marginLeft:20,marginRight:20}}
         
        />
       <Input placeholder="12000F" style={{marginTop:"5%",width:"20%",marginLeft:"-5%"}} />
      </Col>

      
    </Row>
  </div>
  

  <div className="site-card-wrapper" style={{marginTop:"3%"}}>
    <Row gutter={16}>
      <Col span={8}>
        <Image
        
        src={p2}
    width={"45%"}
    style={{marginLeft:20,marginRight:20}}
         
        />
        <Input placeholder="12000F" style={{marginTop:"5%",width:"20%",marginLeft:"-5%"}} />
       
      </Col>

      <Col span={8}>
        <Image
        
        src={p3}
    width={"45%"}
    style={{marginLeft:30,marginRight:20}}
         
        />
        <Input placeholder="12000F" style={{marginTop:"5%",width:"20%",marginLeft:"-5%"}} />
      </Col>
      <Col span={8}>
       
        <Image
        
        src={p5}
    width={"45%"}
    style={{marginLeft:20,marginRight:20}}
         
        />
        <Input placeholder="12000F" style={{marginTop:"5%",width:"20%",marginLeft:"-5%"}} />
        <Rate   allowHalf defaultValue={2.5}  />
      </Col>

      
    </Row>
  </div>



  

          </Content>
        </Layout>
      </Layout>
    );
  };

  
  
  export default Appbar;