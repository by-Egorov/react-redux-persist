// import React, { useState } from 'react'
// import MyModal from "./Components/Modal/MyModal.jsx";
// import PostItem from "./Components/PostItem/PostItem.jsx";
//
//
// const App = () => {
//   return <div>
//     <MyModal/>
//     <PostItem/>
//   </div>
// }
//
// export default App
import React from 'react'
import { Flex, Layout } from 'antd'
import MyModal from './Components/Modal/MyModal.jsx'
import PostItem from './Components/PostItem/PostItem.jsx'
const { Header, Footer, Sider, Content } = Layout
const headerStyle = {
  textAlign: 'center',
  color: '#fff',
  height: 64,
  paddingInline: 48,
  lineHeight: '64px',
}
const contentStyle = {
  textAlign: 'center',
  minHeight: '100vh',
  lineHeight: '120px',
}
const siderStyle = {
  textAlign: 'center',
  lineHeight: '120px',
  color: '#fff',
  backgroundColor: '#1677ff',
}
const footerStyle = {
  textAlign: 'center',
  color: '#fff',
}
const layoutStyle = {
  borderRadius: 8,
  overflow: 'hidden',
  width: 'calc(100% - 8px)',
  maxWidth: 'calc(100% - 8px)',
}
const App = () => (
  <Flex gap='middle' wrap>
    <Layout style={layoutStyle}>
      <Sider width='25%' style={siderStyle}>
        Sider
      </Sider>
      <Layout>
        <Header style={headerStyle}>
          <MyModal />
        </Header>
        <Content style={contentStyle}>
          <PostItem />
        </Content>
        <Footer style={footerStyle}>Footer</Footer>
      </Layout>
    </Layout>
  </Flex>
)
export default App
