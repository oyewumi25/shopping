
import React, { Component } from "react";
import { Card, Input, Space} from "antd";
import { BellOutlined } from '@ant-design/icons';
import { DisplayButton } from "../librairy/Button";
import { validatorConnect } from "../functions/validator-connect";
import { sessionHandler } from "../functions/sessionStore";
import { openNotification }from "../functions/notification";
import { keyCredential, token } from "../constants/credential";
import {
  addUserData,
  removeUserData
} from "../store/actions";

import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { Typography } from 'antd';
import { Image } from 'antd';
import image from '../assets/image.jpeg';
import Helmet from 'react-helmet';


  
import { UserOutlined, EyeTwoTone, EyeInvisibleOutlined } from "@ant-design/icons";
const { Title } = Typography;

class Log extends Component {
  state = {
   numero: "numero",
    nom: "nom",
    prenom: "prenom",
    password: "password",
    alert: false,
    access:false,
    alertText: "Renseignez les champs svp!",
    alertType: "warning",

  };

  componentDidMount() {
    this.props.removeData();
    this.props.removeAnswers();
  }

  closeAlert = () => {
    return this.setState({
      alert: false
    });
  };

  handleConnect = async () => {
    const { nom, prenom, numero } = this.state;

    if (nom.length === 0 || prenom.length === 0) {
      return openNotification("error", "Remplissez tous les champs ");
    }
    if (numero.length !== 8) {
      return openNotification("error", "Le numéro doit être de 8 chiffres");
    }
    await this.props.saveData({
      nom: nom,
      prenom: prenom,
      numero: numero
    });
    await sessionHandler("auth_token", keyCredential, "set");
    this.setState({
      alert: true,
      alertType: "success",
      alertText: "Vous êtes connecté",
      access: true
    });
  };
  render() {
    if (this.state.access=== true) {
      return <Redirect to="/Appbar" />;
    }
    return (
      <div className="site-card-border-less-wrapper" style={{marginTop:"10%",marginLeft:"60%"}}>
        <Helmet bodyAttributes={{style: 'background-color : #FFDEAD'}}/>
      
        
         
            <Space direction="vertical">
            
                <div style={{marginLeft:"20px"}}>
                <BellOutlined style={{marginLeft:"110%",fontSize:"200%",color:"#191970"}} />
                <Title  level={3}  ></Title>
                <Image
                
              
                
            src={image}
            width={"50%"}
            style={{float:"left",marginLeft:"-300%"}}

            />
                </div>
                <h3 style={{marginLeft:"70px"}}></h3>
                
            <Input
              size="large"
              placeholder="nom"
              name="nom"
              onChange={(e) => this.setState({ email: e.target.value })}
             
              style={{ width: "150%", height:"60px", marginLeft: "48%", marginTop:"33px",borderRadius:"10px"}}
            /> 

            <Input
              size="large"
              placeholder="prenom"
              name="prenom"
              onChange={(e) => this.setState({ email: e.target.value })}
              
              style={{ width: "150%",  height:"60px",marginLeft: "48%" ,marginTop:"33px",borderRadius:"10px"}}
            />         
            
            <Input.Password
              placeholder="numéro"
              size="large"
              name="numero"
              onChange={(e) => this.setState({ password: e.target.value })}
              iconRender={(visible) =>
                visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
              }
              style={{ width: "150%",height:"60px" ,marginLeft: "48%" ,marginTop:"33px",borderRadius:"10px"}}
            />
            
            <Input
              size="large"
              placeholder=""
              name="email"
              onChange={(e) => this.setState({ email: e.target.value })}
              style={{ width: "150%", marginLeft: "48%" , height:"60px",marginTop:"33px",borderRadius:"10px"}}
            />

            <DisplayButton
              type="primary"
              disabled={false}
              text={"Connect"}
              onPress={() => this.handleConnect()}
              style={{ width: "150%", height:"60px", marginLeft: "48%", paddingTop: "6px",marginTop:"33px", 
              backgroundColor:"#191970",color:"white",borderRadius:"10px"}}
            />
          </Space>
        
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {};
};

const mapDispatchStoreToProps = (dispatch) => {
  return {
    saveData: (data) => {
      dispatch(addUserData(data));
    },
    removeData: () => {
      dispatch(removeUserData());
    }
    
  };
};

export default connect(mapStateToProps, mapDispatchStoreToProps)(Log);





