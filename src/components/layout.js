/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import "./layout.css"
import { Layout, Menu, Breadcrumb, Row, Col, Button } from 'antd';
import 'antd/dist/antd.css';
import Image from "./image"
import '../style/all.scss'
import '../../node_modules/@fortawesome/fontawesome-free/css/all.css'
import '../style/custom-antd.css'
const { Header, Content, Footer } = Layout;
const style = { background: '#0092ff', padding: '8px 0' };
const styleHeaders = { background:'#fff', paddingTop: '0.2rem', paddingBottom: '0.2rem' }
const Headers = ({children})=> (<header style= { styleHeaders }>
    {children}
</header>)
const Layouts = ({ children }) => {
const image = 'Atypikhouse.png'
  return (
      <Layout className="layout">
            <Headers>
                <Row justify="space-around">
                  <Col span={8}> <Image images = {image} classes='' /> </Col>
                    <Col span={8} className="d-flex">
                      
                        <ul className="listMenus">
                          <li> Favoris </li>
                          <li> Connexion </li>
                          <li> Inscription </li>
                          <li> Aide </li>
                        </ul>
                      
                    </Col>
                    <Col className="d-flex">
                      <Button className="m-auto add" type="primary" size="large"> <i className="fas fa-plus mr-3"></i> Publier une annonce </Button>
                    </Col>
                </Row>
            </Headers>
            <Content>
                {children}
            </Content>
            <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
    
  )
}
Layouts.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layouts
