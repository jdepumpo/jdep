import React from 'react'
import Link from 'gatsby-link'
import Banner from '../components/Banner';

const IndexPage = () => (
  <div>
    <Banner />
    <h3>Hi! My name is</h3>
    <p>Welcome to your new Gatsby site. Now go build something great.</p>
    <Link to="/page-2/">Go to page 2</Link>
  </div>

)

export default IndexPage
