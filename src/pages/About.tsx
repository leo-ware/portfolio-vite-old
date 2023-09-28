import React from "react"
import styled from "styled-components"

import Layout from "../components/Layout"
import SocialLinks from "../components/SocialLinks"
import MeBig from "../assets/me-sitting.png"

const TextContainer = styled.div`
height: 100%;
display: flex;
flex-direction: column;
justify-content: center;
`

const BigImg = styled.img`
    width: 250px;
`

const About: React.FC = () => {
    return (
        <Layout childrenLeft={
            <TextContainer style={{alignItems: "flex-end"}}>
                <BigImg src={MeBig}/>
            </TextContainer>
        }>
            <TextContainer style={{marginLeft: 35, paddingTop: 25}}> 
                <h1>Hi, I'm Leo</h1>
                <p style={{width: 350}}>
                    I make computers do interesting things.
                    Check out my work on my projects page, or 
                    reach out below.
                </p>
                <SocialLinks/>
            </TextContainer>
        </Layout>
    )
}

export default About