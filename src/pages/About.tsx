import React from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"

import Layout from "../components/Layout"
import SocialLinks from "../components/SocialLinks"
import MeBig from "../assets/me-sitting.png"

const ImgContainer = styled.div`
height: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: flex-end;
`

const TextContainer = styled.div`
height: 100%;
display: flex;
flex-direction: column;
padding-top: 25px;

@media (min-width: 600px) {
    justify-content: center;
    margin-left: 35px;
}
`

const BigImg = styled.img`
    width: 250px;
`

const About: React.FC = () => {
    return (
        <Layout childrenLeft={
            <ImgContainer>
                <BigImg src={MeBig}/>
            </ImgContainer>
        }>
            <TextContainer> 
                <h2>Hi, I'm Leo</h2>
                <p style={{maxWidth: 400}}>
                    I'm interested in causal inference and computational statistics.
                    I'm currently existing in an academic liminal space.
                    Check out my <Link to={"/projects"}>projects</Link> or reach out below.
                </p>
                <SocialLinks/>
            </TextContainer>
        </Layout>
    )
}

export default About