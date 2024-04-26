import './App.css'
import {
    createBrowserRouter,
    RouterProvider
} from "react-router-dom"

import About from './pages/About'
import Projects from './pages/Projects'
import CV from './pages/CV/CV'
import NotFound404 from './pages/404'
import PQP from './pages/projects/PQP'
import CausalDict from './pages/projects/CausalDict'
import { essayRoutes } from './pages/essays/Essays'
import Foo from './pages/Foo'


function App() {
    const router = createBrowserRouter([
        {path: "/", element: <About/>},
        {path: "/about", element: <About/>},
        {path: "/code/pqp", element: <PQP/>},
        {path: "/code/causal-dict", element: <CausalDict/>},
        {path: "/projects", element: <Projects/>},
        {path: "/cv", element: <CV/>},
        {path: "/foo", element: <Foo/>},
        ...essayRoutes,
        {path: "*", element: <NotFound404/>},
    ])
    return (
        <RouterProvider router={router}/>
    )
}

export default App
