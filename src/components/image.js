import React from "react"
import { useStaticQuery, graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"
import '../style/all.scss'
function renderImage(file) {
  console.log('files=> ', file);
  //Ajouter une className dans la props pour l'img
  const myclass = file.node.relativePath =='Atypikhouse.png'?'customImg':null

  //Image en base64
  const files = file.node.childImageSharp.fluid
  
  return <Img fluid={files} className={myclass} imgStyle={{
    objectFit: "contain",
    objectPosition: "50% 50%",}} />
}

const Image = function (props) {
  return <StaticQuery
    query={graphql`
      query {
      images: allFile(filter:{ extension: { regex: "/jpeg|jpg|png|gif/"}}) {
      edges {
        node {
          extension
            relativePath
              childImageSharp {
                fluid(maxWidth: 1000) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
  `}
    //Ici on recupere l'image correspondant à notre image passé en prop
    render={({ images, classes }) => renderImage(images.edges.find(image => image.node.relativePath === props.images))}
  />
}

export default Image
