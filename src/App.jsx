import React from 'react'
import { Flex, Layout } from 'antd'
import MyModal from './Components/Modal/MyModal.jsx'
import PostItem from './Components/PostItem/PostItem.jsx'
import MySort from './Components/MySort/MySort.jsx'
const { Header, Footer, Sider, Content } = Layout

const App = () => (
  <Flex gap='middle' wrap>
    <Layout className='layout'>
      <Layout>
        <Header className='header'>
          <MyModal />
          <MySort />
        </Header>
        <Content className='content'>
          <PostItem />
        </Content>
        <Footer className='footer'>egorov.dev@gmail.com</Footer>
      </Layout>
    </Layout>
  </Flex>
)
export default App
