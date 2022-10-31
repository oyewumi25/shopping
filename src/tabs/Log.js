
import React, { Component } from "react";
import { Card, Input, Space} from "antd";
import { BellOutlined } from '@ant-design/icons';
import { DisplayButton } from "../librairy/Button";
import { validatorConnect } from "../functions/validator-connect";
import { sessionHandler } from "../functions/sessionStore";
import { openNotification }from "../functions/notification";
import { keyCredential, token } from "../constants/credential";
import { addUserData } from "../store/actions";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { Typography } from 'antd';
import { Image } from 'antd';
import image from '../assets/image.jpeg';

  
import { UserOutlined, EyeTwoTone, EyeInvisibleOutlined } from "@ant-design/icons";
const { Title } = Typography;

class Log extends Component {
  state = {
    email: "email",
    nom: "nom",
    prenom: "prenom",
    password: "password",
    alert: false,
    alertText: "Renseignez les champs svp!",
    alertType: "warning",

  };

  closeAlert = () => {
    return this.setState({                                                                                                                    
    });
  };

  handleConnect = async () => {
    const { email, password ,nom,prenom} = this.state;

    if (!validatorConnect(email, password,nom,prenom)) {
      return openNotification ("warning", "Veuillez renseigner les champs")    
    
    }
    
    await this.props.saveData({
      email: email,
      password: password,
      token: token
    });

    await sessionHandler("auth_token", keyCredential, "set");
    this.setState({
      alert: true,
      alertType: "success",
      alertText: "Vous êtes connecté",
    });
  };
  render() {
    const { alert, alertText, alertType } = this.state;

    if (
      sessionHandler("auth_token", null, "get") &&
      sessionHandler("auth_token", null, "get").length !== 0
    ) {
      return <Redirect to="/Appbar" />;
    }
    return (
      <div className="site-card-border-less-wrapper" style={{marginTop:"10%",marginLeft:"60%"}}>

      
        
         
            <Space direction="vertical" >
            
                <div style={{marginLeft:"20px"}}>
                <BellOutlined style={{marginLeft:"110%",fontSize:"200%",color:"#191970"}} />
                <Title  level={3}  >S'inscrire à la newsletter</Title>
                <Image
        
            src={image}
            width={"50%"}
            style={{float:"left"}}

            />
                </div>
                <h3 style={{marginLeft:"70px"}}>S'inscrire à la newsletter</h3>
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
              placeholder="email"
              size="large"
              name="email"
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
    }
  };
};

export default connect(mapStateToProps, mapDispatchStoreToProps)(Log);





