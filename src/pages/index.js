import React from "react"
import Layout from "../components/Layout"
import { graphql } from 'gatsby'
import MainContent from "../components/MainContent";
import Section from "../components/Section";
import Item from "../components/Item";

// markup
const IndexPage = ({data}) => {
  
  const edges = data.allContentfulProducto.edges;

  const productos = [];

  console.log(edges)
  console.log(productos)
  edges.map(edge => (
    productos.push(edge.node)
  ))

  // Accepts the array and key
const groupBy = (array, key) => {
  // Return the end result
  return array.reduce((result, currentValue) => {
    // If an array already present for key, push it to the array. Else create an array and push the object
    (result[currentValue[key]] = result[currentValue[key]] || []).push(
      currentValue
    );
    // Return the current iteration `result` value, this will be taken as next iteration `result` value and accumulate
    return result;
  }, []); // empty object is the initial value for result object
};

// Group by color as key to the person array
const categorias = groupBy(productos, 'categoria');

console.log(categorias)

  return (

    <Layout>
      <MainContent>
        {Object.keys(categorias).map((key) => {
          return (
            <Section categoria={key}>
              {categorias[key].map(item => (
                <Item nombre={item.item} traduccion={item.traduccion} precio={item.precio} />
              ))}
            </Section>
          )
        })}
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