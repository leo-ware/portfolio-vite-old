import './App.css'
import {
    createBrowserRouter,
    RouterProvider
} from "react-router-dom"
import About from './pages/about'

function App() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <About/>
        }
    ])
    return <RouterProvider router={router}/>
}

export default App
