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
  <Row justify="center" className="bannerContact">  <Row justify="center" className="filterContact"></Row></Row>
<Row justify="center">
<iframe className="ContactMap" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6308.654158601966!2d-122.39712718281599!3d37.75892824890718!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808f7fb63f323edb%3A0xc80c601741ad88de!2sLa%20French%20Teach!5e0!3m2!1sfr!2sfr!4v1606912095963!5m2!1sfr!2sfr" width="83%"></iframe>
    <p className="ContactTitle">Contactez-nous</p>
</Row>
  <SEO title="Contact"  meta = {meta} />
  <Link to="/">Go back to the homepage</Link>    
</Layouts> 

)
export default ContactPage
