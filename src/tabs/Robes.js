import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { Col, Row, Image } from 'antd';
import soie1 from '../assets/soie1.jpeg';
import soie2 from '../assets/soie2.jpeg';
import soie3 from '../assets/soie3.jpeg';


class Robes extends Component {
    render() {
        return (
            <div style={{ marginTop: "8%",display:"flex",padding:"10%",marginLeft:"10%",marginRight:"10%"}}>
                <Row gutter={17}>
                   
                        <Image

                            src={soie1}
                            width={"15%"}
                        />
                  

                 
                        <Image

                            src={soie2}
                            width={"15%"}
                        />
                  

                 
                        <Image

                            src={soie3}
                            width={"15%"}
                        />

                        <Image

                            src={soie3}
                            width={"15%"}
                        />
                  

                </Row>
            </div>
        )
    }
}

export default Robes;
