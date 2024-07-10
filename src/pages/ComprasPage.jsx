import { useContext} from "react"
import { Card } from "../components/Card"
import { ProductosContext } from "../context/ProductosContext"
import { CarritoContext } from "../context/CarritoContext"

export const ComprasPage = () => {
  const { productos } = useContext(ProductosContext)

  const { agregarCompra, eliminarCompra } = useContext(CarritoContext)

  const handleAgregar = (compra) => {
    agregarCompra(compra)
    
  }

  const handleQuitar = (id) => {
    eliminarCompra(id)

  }

  return (
    //fractal <> </> para no usar div
    <>
      <h1>Compras:</h1>
      <hr />
      {productos.map(producto => (
        <Card 
          key={producto.id}
          imagen={producto.image}
          titulo={producto.title}
          descripcion={producto.description}
          precio={producto.price}
          handleAgregar={() => handleAgregar(producto)}
          handleQuitar={() => handleQuitar(producto.id)}
        >
        </Card>
      ))}
    </>
  )
}































// export const ComprasPage = () => {
//   //const { productos } = useContext(ProductosContext)


//  const [productos, setProductos] = useState([])

//     const fetchProductos = async () => {
//       const response = await fetch('https://fakestoreapi.com/products')
//       const data = await response.json()
//       console.log(data)
//       setProductos(data)
//     }
  
//     useEffect(() => {
//       fetchProductos()
//     }, [])

//   return (
//     //fractal <> </> para no usar div
//     <>
//       <h1>Compras:</h1>
//       <hr />
//       {productos.map(producto => (
//         <Card key={producto.id}
//           imagen={producto.image}
//           titulo={producto.title}
//           descripcion={producto.description}
//           precio={producto.price}
//         >

//         </Card>
//       ))}
//     </>
//   )
// }
