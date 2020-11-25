import React, { Component } from "react"
import { Link } from "gatsby"
import Layouts from "../components/layout"
import SEO from "../components/seo"
import { Layout, Menu, Breadcrumb, Row, Col, Button } from 'antd';
import '../style/all.scss'


const meta = [{

}]
const ContactPage = () => (
  <Layouts>
  <Row justify="center" className="bannerContact"></Row>
  <Row justify="center" className="filterContact"></Row>
<Row justify="center">
    <Col>
       Enim enim reprehenderit voluptate eiusmod velit ut commodo exercitation deserunt. Sunt culpa anim qui in quis voluptate ipsum cillum cillum. Ipsum culpa nulla adipisicing tempor. Laboris reprehenderit do non proident adipisicing laborum adipisicing Lorem.
    </Col>
</Row>
  <SEO title="Accueil"  meta = {meta} />
  <Link to="/">Go back to the homepage</Link>    
</Layouts> 

)
export default ContactPage
