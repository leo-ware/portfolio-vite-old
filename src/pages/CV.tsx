// import styled from "styled-components"

import Resume from "../assets/Resume.pdf"
import Layout from "../components/Layout"
import { HeaderContainer } from "../components/Text"

// const CVContainer = styled.iframe`
//     width: 100%;
//     height: 100%;
//     // border: none;
//     margin-bottom: 50px;
// `

const CV = () => {
    return (
        <Layout>
            <HeaderContainer>
                <h1>Resume</h1>
            </HeaderContainer>
            <object data={Resume} type="application/pdf" width="100%" height="100%"/>
        </Layout>
    )
}

export default CV