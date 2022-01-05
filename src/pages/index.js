import React from "react"
import Layout from "../components/Layout"
import { graphql } from 'gatsby'
import Section from "../components/Section";
import Item from "../components/Item";
import MainContent from "../components/MainContent";

// markup
const IndexPage = ({data}) => {
  
  const edges = data.allContentfulProducto.edges;

  const productos = [];

  edges.map(edge => (
    productos.push(edge.node)
  ))

  console.log(edges)
  console.log(productos)
  

  return (

    <Layout>
      <MainContent>
        {productos.map(producto => (
          <Section categoria={producto.categoria}>
            <Item nombre={producto.item} traduccion={producto.traduccion} precio={producto.precio} />
          </Section>
        ))}
      </MainContent>
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query indexPageQuery {
    allContentfulProducto {
      edges {
        node {
          categoria
          item
          traduccion
          descripcion
          descripcionTraducida
          precio
        }
      }
    }
  }
`