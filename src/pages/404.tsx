import styled from "styled-components"

import Layout from "../components/Layout"
import { Link } from "react-router-dom"

const HeaderPositioner = styled.div`
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

const NotFound404 = () => {
    return (
        <Layout>
            <HeaderPositioner>
                <h1>404: Not Found</h1>
                <p style={{maxWidth: 375}}>
                    Unfortunately, we weren't able to find the page you are looking for.
                    You can return to the home page <Link to="/">here</Link>.
                </p>
            </HeaderPositioner>   
        </Layout>
    )
}

export default NotFound404