import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout/Layout';
import Home from './components/Home/Home';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import NotFound from './components/NotFound/NotFound';
import Cart from './components/Cart/Cart';
import Categories from './components/Categories/Categories';
import Brands from './components/Brands/Brands';
import Products from './components/Products/Products';
let routes = createBrowserRouter([
  {
    path: '', element: <Layout/>, children: [
    {index:true, element: <Home/>},
    {path:'register', element: <Register/>},
    {path:'login', element: <Login/>},
    {path:'products', element: <Products/>},
    {path:'categories', element: <Categories/>},
    {path:'cart', element: <Cart/>},
    {path:'brands', element: <Brands/>},
    {path:'*', element: <NotFound/>},
  ]}
])

function App() {
  return <RouterProvider router={routes}>
    
  </RouterProvider>
}

export default App;
