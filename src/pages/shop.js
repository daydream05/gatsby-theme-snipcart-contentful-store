import React from "react"

import tokens from '../../utils/tokens'

import Layout from '../components/layout'

const Shop = (props) => {
  console.log(tokens.mediaQueries)
  return (
    <Layout>
      <h1>I'm a shopping page</h1>
    </Layout>
  )
}

export default Shop