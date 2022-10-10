
  import { Layout, Menu } from 'antd';
  import { Carousel } from 'antd';
  import React from 'react';
  import 'antd/dist/antd.css';
  import { Card } from 'antd';
  import { Image } from 'antd';
  import couverture from '../assets/couverture.jpg';

  import { Input } from 'antd';
  import { Typography } from 'antd';
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
      placeholder="Chercher un produit,une marquue ou une categorie...."
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

<Title style={{marginTop:-10}} level={2}>Bienvenue chez Elegance'Shop</Title>
        
          </Content>
        </Layout>
      </Layout>
    );
  };

  
  
  export default Appbar;