import { useReducer } from "react"
import { CarritoContext } from "./CarritoContext"

const initialState = []

const comprasReducer = (state= initialState, action = {}) => {
    switch (action.type) {
        case '[CARRITO] Agregar_Compra':
            return [...state, action.payload]
        case '[CARRITO] Aumentar cantidad de Compra': //TODO: AGREGAR CANTIDAD Y MODIFICAR
        return state.map(item => {
            const cant = item.cantidad + 1
            if (item.id === action.payload) 
                return {...item, cantidad: cant}   
            return item
        })
        case '[CARRITO] Disminuir cantidad de compra': //TODO: AGREGAR CANTIDAD Y MODIFICAR
        return state.map(item => {
            const cant = item.cantidad - 1
            if (item.id === action.payload && item.cantidad > 0) 
                return {...item, cantidad: cant}   
            return item
        })
        case '[CARRITO] Eliminar_compra':
            return state.filter(compra => compra.id !== action.payload)
        default:
            return state
    }
}

export const CarritoProvider = ({ children }) => {

    const [listaCompras, dispatch] = useReducer(comprasReducer, initialState)

    const agregarCompra =   (compra) => {
        compra.cantidad = 1
        const action = {
            type: '[CARRITO] Agregar_Compra',
            payload: compra
        }
        dispatch(action)
    }

    const aumentarCantidad =  (id) => {
        const action = {
            type: '[CARRITO] Aumentar cantidad de Compra',
            payload: id
        }
        dispatch(action)
    }

    const disminuirCantidad =  (id) => {
        const action = {
            type: '[CARRITO] Disminuir cantidad de compra',
            payload: id
        }
        dispatch(action)
    }

    const eliminarCompra = (id) => {
        const action = {
            type: '[CARRITO] Eliminar_compra',
            payload: id
    }
    dispatch(action)
}



  return (
    <CarritoContext.Provider value={{listaCompras, agregarCompra, aumentarCantidad, disminuirCantidad, eliminarCompra}}>
        {children}
    </CarritoContext.Provider>
  )
}
