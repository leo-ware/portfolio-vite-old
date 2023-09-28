import React from "react"
import styled from "styled-components"

import Layout from "../components/Layout"
import { HeaderContainer } from "../components/Text"

const CVContainer = styled.iframe`
    width: 100%;
    height: 100%;
    // border: none;
    margin-bottom: 50px;
`

const CV = () => {
    return (
        <Layout>
            <HeaderContainer>
                <h1>Resume</h1>
            </HeaderContainer>
            <CVContainer
                src="https://docs.google.com/document/d/e/2PACX-1vTxat0c8TgU7KZBskcBbYeLCd4e4JG9UgoSPd8JU4_M0PcVBfqj1sWBqG9V7_Owre75HqsLmYEji3Oy/pub?embedded=true"
                />
        </Layout>
    )
}

export default CV