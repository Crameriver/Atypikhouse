import Layouts from "../components/layout"
import React, { Component } from "react"
import SEO from "../components/seo"
import { Layout, Menu, Breadcrumb, Row, Col, Button } from 'antd';
import '../style/all.scss'
const meta = [{

}]
const About = ()=> (
    <Layouts>
        <Row justify="center" className="banner">
          <Col>
             Enim enim reprehenderit voluptate eiusmod velit ut commodo exercitation deserunt. Sunt culpa anim qui in quis voluptate ipsum cillum cillum. Ipsum culpa nulla adipisicing tempor. Laboris reprehenderit do non proident adipisicing laborum adipisicing Lorem.
          </Col>
      </Row>
        <SEO title="Accueil"  meta = {meta} />        
    </Layouts> 
)

export default About