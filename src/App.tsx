import './App.css'
import {
    createBrowserRouter,
    RouterProvider
} from "react-router-dom"
import About from './pages/About'
import Projects from './pages/Projects'
import CV from './pages/CV'

function App() {
    const router = createBrowserRouter([
        {path: "/", element: <About/>},
        {path: "/about", element: <About/>},
        {path: "/projects", element: <Projects/>},
        {path: "/cv", element: <CV/>},
    ])
    return <RouterProvider router={router}/>
}

export default App
