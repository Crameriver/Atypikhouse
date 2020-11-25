import React, { Component } from "react"
import Layouts from "../components/layout"
import SEO from "../components/seo"
import { Layout, Menu, Breadcrumb, Row, Col, Button } from 'antd';
import { Link } from "gatsby"
import '../style/all.scss'

const meta = [{

}]
const IndexPage = () => (
  <Layouts>
  <Row justify="center" className="banner">
    <Col>
    </Col>
</Row>
<Row justify="center">
    <Col>
       Enim enim reprehenderit voluptate eiusmod velit ut commodo exercitation deserunt. Sunt culpa anim qui in quis voluptate ipsum cillum cillum. Ipsum culpa nulla adipisicing tempor. Laboris reprehenderit do non proident adipisicing laborum adipisicing Lorem.
    </Col>
</Row>
  <SEO title="Accueil"  meta = {meta} />
  <Link to="/contact/">Contact</Link>      
</Layouts> 

)

export default IndexPage
