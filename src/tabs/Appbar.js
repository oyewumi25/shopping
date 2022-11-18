
  import { Layout, Menu,Col, Row,Typography,Input,Breadcrumb} from 'antd';
  import React from 'react';
  import 'antd/dist/antd.css';
  import { Card,Rate,Divider,Button } from 'antd';
  import { Image } from 'antd';
  import { Link, Route ,DisplayLink } from "react-router-dom";
  import MediaQuery from 'react-responsive'
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
  
  
 
  import { ShoppingCartOutlined,LockOutlined,TwitterOutlined,InstagramOutlined,WhatsAppOutlined,
    MailOutlined ,TeamOutlined,UserOutlined ,CarOutlined,SyncOutlined,FacebookOutlined} from '@ant-design/icons';
  const { Header, Sider, Content,Footer } = Layout;
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
           
        
          <Search className="search"
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
    width={"100%"}
    style={{height:"80vh",width:"100%",marginLeft:30,marginRight:30}}
    
    
  />
    
<Title style={{marginTop:"3%",textAlign:"center",color:"#191970"}} level={2}>Bienvenue chez Elegance'Shop</Title>
<Title style={{marginTop:"1%",textAlign:"center",color:"#002170"}} level={5}>Nouvel arrivage</Title>

<Breadcrumb style={{marginLeft:"3%",fontSize:"20px"}}>
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
    

<div className="site-card-wrapper" style={{marginTop:"3%",margin:"6%"}}>
    <Row gutter={16}>
      <Col span={8}>
        <Image
        
        src={soie1}
    width={"50%"}
    style={{marginLeft:20,marginRight:20}}
         
        />
 <Input placeholder="12000F" style={{marginTop:"5%",width:"20%",marginLeft:"-5%"}} />
      <Title level={5} style={{marginLeft:"10%",marginTop:6,color:"#002170"}}>soie lisse en motif extra</Title>
      <Rate style= {{marginLeft:"10%"}}  allowHalf defaultValue={2.5} />
      </Col>
      <Col span={8}>
        <Image
        
        src={soie2}
    width={"50%"}
    style={{marginLeft:30,marginRight:20}}
         
        />
        <Input placeholder="12000F" style={{marginTop:"5%",width:"20%",marginLeft:"-5%"}} />
        <Title level={5} style={{marginLeft:"10%",marginTop:6,color:"#002170"}}>soie lisse en motif extra</Title>
        <Rate style= {{marginLeft:"10%"}}  allowHalf defaultValue={2.5} />
      </Col>
      <Col span={8}>
       
        <Image
        
        src={soie3}
    width={"50%"}
    style={{marginLeft:20,marginRight:20}}
         
        />
       <Input placeholder="12000F" style={{marginTop:"5%",width:"20%",marginLeft:"-5%"}} />
       <Title level={5} style={{marginLeft:"10%",marginTop:6,color:"#002170"}}>soie lisse en motif extra</Title>
        <Rate style= {{marginLeft:"10%"}}  allowHalf defaultValue={2.5} />
      </Col>

      
    </Row>
  </div>



  <div className="site-card-wrapper" style={{marginTop:"3%",margin:"6%"}}>
    <Row gutter={16}>
      <Col span={8}>
        <Image
        
        src={robe1}
    width={"45%"}
    style={{marginLeft:20,marginRight:20}}
         
        />
        <Input placeholder = "15000F" style={{marginTop:"5%",width:"20%",marginLeft:"-5%",color:"#191970"}} /> 
         <Title level={5} style={{marginLeft:"5%",marginTop:6,color:"#002170"}}>Robe bleu en dentelle de venise</Title>
         <Rate style= {{marginLeft:"10%"}}  allowHalf defaultValue={2.5} />
      </Col>

      <Col span={8}>
        <Image
        
        src={robe2}
    width={"50%"}
    style={{marginLeft:30,marginRight:20}}
         
        />
        <Input placeholder = "15000F" style={{marginTop:"5%",width:"20%",marginLeft:"-5%",color:"#191970"}} />
        <Title level={5} style={{marginLeft:"5%",marginTop:6,color:"#002170"}}>Robe rouge en dentelle de venise</Title>
        <Rate style= {{marginLeft:"10%"}}  allowHalf defaultValue={2.5} />
      </Col>
      <Col span={8}>
       
        <Image
        
        src={jaune}
    width={"50%"}
    style={{marginLeft:20,marginRight:20}}
         
        />
       <Input placeholder = "15000F" style={{marginTop:"5%",width:"20%",marginLeft:"-5%",color:"#191970"}} />
       <Title level={5} style={{marginLeft:"5%",marginTop:6,color:"#002170"}}>Robe jaune en dentelle de venise</Title>
       <Rate style= {{marginLeft:"10%"}}  allowHalf defaultValue={2.5} />
      </Col>

      
    </Row>
  </div>
  

  <div className="site-card-wrapper" style={{marginTop:"3%",margin:"6%"}}>
    <Row gutter={16}>
      <Col span={8}>
        <Image
        
        src={p2}
    width={"45%"}
    style={{marginLeft:20,marginRight:20}}
         
        />
        <Input placeholder="25000F" style={{marginTop:"5%",width:"20%",marginLeft:"-5%"}} />
        <Title level={5} style={{marginLeft:"2%",marginTop:6,color:"#002170"}}>Perruque humaine semi ondulée L12</Title>
        <Rate style= {{marginLeft:"10%"}}  allowHalf defaultValue={2.5} />
       
      </Col>

      <Col span={8}>
        <Image
        
        src={p3}
    width={"45%"}
    style={{marginLeft:30,marginRight:20}}
         
        />
        <Input placeholder="30000F" style={{marginTop:"5%",width:"20%",marginLeft:"-5%",color:"#191970"}} />
        <Title level={5} style={{marginLeft:"5%",marginTop:6,color:"#002170"}}>Perruque humaine  ondulée L16</Title>
        <Rate style= {{marginLeft:"10%"}}  allowHalf defaultValue={2.5} />
      </Col>
      <Col span={8}>
       
        <Image
        
        src={p5}
    width={"45%"}
    style={{marginLeft:20,marginRight:20}}
         
        />
        <Input placeholder="35000F" style={{marginTop:"5%",width:"20%",marginLeft:"-5%",color:"#191970"}} />
        <Title level={5} style={{marginLeft:"6%",marginTop:6,color:"#002170"}}>Perruque humaine lisse L22</Title>
        <Rate style= {{marginLeft:"10%"}}  allowHalf defaultValue={2.5} />
      
      </Col>

      
    </Row>
  </div>

  <Title level={3} style={{marginLeft:"37%",marginTop:"4%",color:"#191970"}}>Les clients parlent de nos services *</Title>


  <div className="site-card-wrapper">
    <Row gutter={16}>
      <Col span={8}>
      <LockOutlined style={{fontSize:"24px",color:"#191970",marginLeft:"80%"}}/>
      <Title level={3} style={{marginLeft:"65%",marginTop:6,color:"#191970"}}>Paiement sécurisé</Title>
      <Title level={5} style={{marginLeft:"65%",marginTop:6,textAlign:"center",color:"#002170"}}>“Le site est très intuitif.
      <br/>La possibilité de payer en ligne ou en magasin <br/> est vraiment apprécié.“<br/> 18/10/2022</Title>
      </Col>
      <Col span={8}>
      <CarOutlined style={{fontSize:"24px",color:"#00BFFF",color:"#191970",marginLeft:"41%"}}/>
      <Title level={3} style={{marginLeft:"34%",marginTop:6,color:"#191970"}}>livraison</Title> 
      <Title level={5} style={{marginLeft:"-15%",marginTop:6,textAlign:"center",color:"#002170"}}>“Toujours aussi satisfait<br/> de Elegance'Shop ,Le colis<br/> à 
      toujours été livré 2 jours <br/>en avance et en bon état!“ <br/>
      12/10/2022</Title> 
      </Col>

      <Col span={8}>
      <SyncOutlined style={{fontSize:"24px",color:"#191970"}}/>
      <Title level={3} style={{marginLeft:"-10%",marginTop:6,color:"#191970"}}>Retour facile</Title> 
      <Title level={5} style={{marginLeft:"-100%",marginTop:6,textAlign:"center",color:"#002170"}}>“Merci à Elegance'Shop <br/> pour  la diversité de ses<br/> 
       produits et de leur prix<br/>  pratique pour les échanges“<br/> 20/10/2022 </Title> 
      </Col>
    </Row>
  </div>

  
        </Content>
        <br/>
        <Footer
        
        style={{backgroundColor:"#191970",height:"300px"}}
        
        >

<div className="site-card-wrapper">
    <Row gutter={16}>
      <Col span={8}>
      <Title level={4} style={{marginLeft:"65%",marginTop:15,color:"white"}}>Besoin D'aide</Title>
      <Title level={5} style={{marginLeft:"65%",marginTop:15,color:"white"}}>Une question <br/>Un problème <br/> N'hesitez <br/>
       surtout pas<br/> à nous contacter<br/>    </Title>
       <br/>
       
       <Button type="primary" Style={{float:"50"}} shape="round" icon={ <MailOutlined  />} >
        Je m'inscris à la newsletter
      </Button>
      
      </Col>
      

      <Col span={8}>
      <Title level={4} style={{marginLeft:"34%",marginTop:15,color:"white"}}> Nos services</Title> 
      <Title level={5} style={{marginLeft:"34%",marginTop:15,color:"white"}}>Suivi de commande <br/>La livraison, Retour,<br/>Echange,
      Rappel produits,<br/>Paiement,Retraction </Title> 
      </Col>
      <Col span={8}>
      <Title level={4} style={{marginLeft:"-10%",marginTop:15,color:"white"}}>Suivez-nous</Title> 
      <Title level={5} style={{marginLeft:"-10%",marginTop:15,color:"white"}}>sur nos reseaux sociaux</Title> 
      <div style={{color:"white",widht:"80vh",display:"flex",marginLeft:"-5%",marginTop:"35px",justifyContent:"space-between"}}>
      <FacebookOutlined style={{fontSize:"200%"}}/>
      <TwitterOutlined style={{fontSize:"200%"}}/>
      <InstagramOutlined style={{fontSize:"200%"}}/>
      <WhatsAppOutlined  style={{fontSize:"200%"}}/>
      <Divider Style= {{color:"white"}} mode="vertical"/>
      </div>
      <div style={{marginLeft:"20%",marginRight:"20%",width:"100%"}}>
       <div style={{width:"30%"}}>
       
       <br/>
       </div>

       <div style={{width:"30%"}}>
      
       </div>

       <div style={{width:"30%"}}>

       </div>

      </div>
      </Col>
    </Row>
  </div>
  
        </Footer>
        
        </Layout>
      </Layout>
    );
  };

  
  
  export default Appbar;