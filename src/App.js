import './App.module.scss'
import Home from "./pages/Home";
import Recipes from "./pages/Recipes";
import RecipeDetail, { loader as recipeLoader} from "./pages/RecipeDetail";
import NotFound from "./pages/NotFound";
import { RouterProvider, createBrowserRouter} from 'react-router-dom'
import CartProvider from './store/CartProvider'


const router = createBrowserRouter([
  {path: '/', element: <Home/>},
  {path: '/recipes', element: <Recipes/>},
  {path: '/recipes/:id', element: <RecipeDetail/>, loader: recipeLoader},
  {path: '*', element: <NotFound/>},
])


function App() {

 
  return (
    <CartProvider>
      <div>
           <RouterProvider router={router}/>
      </div>
    </CartProvider>
  );
}

export default App;

