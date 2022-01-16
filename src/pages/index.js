import React from "react"
import Layout from "../components/Layout"
import { graphql } from 'gatsby';
import Section from "../components/Section";
import Item from "../components/Item";
import NavBar from "../components/NavBar";
import MainContent from "../components/MainContent";
import TopBtn from "../components/TopBtn";
import Hero from "../components/Hero";
import Recuadro from "../components/Recuadro";
import Logo from "../components/Logo";
import Contacto from "../components/Contacto";
import Footer from "../components/Footer"

// markup
const IndexPage = ({data}) => {
  
  const edges = data.allContentfulProducto.edges;

  const datos = data.allContentfulDatos.edges;

  const datosArr = [];

  datos.map((dato) => (
    datosArr.push(dato.node.texto)
  ))

  console.log(datos)
  console.log(datosArr)

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


const keys = Object.keys(categorias).map((key) => {
  return (
    key
  )
})

console.log(keys)

console.log(categorias)
  return (

    <Layout>
      <Logo />
      <Recuadro />
      <Hero />
      <MainContent>
        {Object.keys(categorias).map((key) => {
          return (
            <Section categoria={key} id={key}>
              {categorias[key].map(item => (
                <Item nombre={item.item} descripcion={item.descripcion} traduccion={item.traduccion} descripcionTraducida={item.descripcionTraducida} precio={item.precio} />
              ))}
            </Section>
          )
        })}
        <Contacto>
          {datosArr.map((dato) => {
            return (
              <span className="text-left m-2 border-b-2">{dato}</span>
            )
          })}
        </Contacto>
      </MainContent>
      <Footer />
      <NavBar />
      <TopBtn />
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
          descripcion
          descripcionTraducida
          precio
        }
      }
    }
    allContentfulDatos {
      edges {
        node {
          texto
        }
      }
    }
  }
`