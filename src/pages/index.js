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

  // acepta un array y una key
const ordenarPor = (array, key) => {
  // devolver el resultado final
  return array.reduce((result, currentValue) => {
    // si hay un array para la key pushearlo para el array, si no lo hay crear uno nuevo y pushearlo
    (result[currentValue[key]] = result[currentValue[key]] || []).push(
      currentValue
    );
    // devolver el resultado actual que va a ser tomado como el siguiente actual y acumulado
    return result;
  }, []); // un array vacio es el valor inicial para el array que resulta
};

// agrupar por categoria el array de productos
const categorias = ordenarPor(productos, 'categoria');

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