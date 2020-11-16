import React from "react"

import Layouts from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layouts>
    <SEO title="404: Not found" />
    <h1>404: Not Found</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </Layouts>
)

export default NotFoundPage
