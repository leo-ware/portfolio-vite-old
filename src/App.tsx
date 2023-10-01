import './App.css'
import {
    createBrowserRouter,
    RouterProvider
} from "react-router-dom"

import About from './pages/About'
import Projects from './pages/Projects'
import CV from './pages/CV'
import NotFound404 from './pages/404'
import PQP from './pages/projects/PQP'


function App() {
    const router = createBrowserRouter([
        {path: "/", element: <About/>},
        {path: "/about", element: <About/>},
        {path: "/projects/pqp", element: <PQP/>},
        {path: "/projects", element: <Projects/>},
        {path: "/cv", element: <CV/>},
        {path: "*", element: <NotFound404/>}
    ])
    return (
        <RouterProvider router={router}/>
    )
}

export default App
