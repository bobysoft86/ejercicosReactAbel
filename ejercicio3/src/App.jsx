import './App.css'
import { Product } from './components/Product/Product';
import data from './data'

const {product} = data;

function App() {


  return (
    <>
 <Product info={product}></Product>
    </>
  )
}

export default App
