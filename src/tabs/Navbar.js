import { Carousel } from 'antd';
import React from 'react';
import 'antd/dist/antd.css';
import { Input, Space } from 'antd';
// const contentStyle = {
//   height: '160px',
//   widht:'100vh',
//   color: '#fff',
//   lineHeight: '160px',
//   textAlign: 'center',
//   background: '#364d79',

// };
const { Search } = Input;
const onSearch = (value) => console.log(value);
const { Header, Layout ,Content} = Layout;
const App = () => {
  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };

  return (
   <Layout>
    <Header>
    <Search
      placeholder="input search text"
      allowClear
      onSearch={onSearch}
      style={{
        width: 200,
      }}
    />  
    </Header>
    <Content>
    <Carousel afterChange={onChange}>
      <div>
        <h3 style={{color:"orange",backgroundColor:"orange",height:"100vh",marginTop:"80"}}>1</h3>
      </div>
      <div>
        
      </div>
    </Carousel>
//     </Content>
//   </Layout>
   );
};

export default App;