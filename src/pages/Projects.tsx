import React from "react"
import styled from "styled-components"
import {Link} from "react-router-dom"

import Layout from "../components/Layout"
import { HeaderContainer } from "../components/Text"
import PQPLogo from "../assets/pqp_logo.ico"
import CDLogo from "../assets/causaldict_logo.svg"
import TGLogo from "../assets/message-square.svg"


const ThumbnailContainer = styled.div`
width: 80%;
height: 100px;
border-left: 2px solid black;
margin: 15px 10%;
padding: 0 12px;

a {
    text-decoration: none;
    color: black;
    &:hover {
        color: grey;
    }
}
`

const ThumbnailTextContainer = styled.div`
width: 100%;
height: 100%;
margin-left: 125px;
`

const ThumbnailImg = styled.img`
width: 100px;
height: 100px;
float: left;
`

const ProjectThumbnail: React.FC<{title: string, desc: string, img: string, slug?: string}> = (props) => {
    const linkTo = "/projects/" + props.slug
    return (
        <ThumbnailContainer>
            <Link to={linkTo}>
                <ThumbnailImg src={props.img}/>
            </Link>
            <ThumbnailTextContainer>
                <Link to={linkTo}>
                    <h3>{props.title}</h3>
                </Link> 
                <p>{props.desc}</p>
            </ThumbnailTextContainer>
        </ThumbnailContainer>
    )
}

const Projects = () => {
    return (
        <Layout>
            <HeaderContainer>
                <h1>Projects</h1>
            </HeaderContainer>
            <ProjectThumbnail
                title={"PQP"}
                slug={"pqp"}
                desc={"An open-source library for end-to-end structural causal modeling."}
                img={PQPLogo}/>
            <ProjectThumbnail
                title={"Causal: dict"}
                desc={"A educational resource for learning the key ideas of causal inference."}
                img={CDLogo}/>
            <ProjectThumbnail
                title={"TutorGPT"}
                desc={"An LLM-based tool for learning a foreign language through immersion."}
                img={TGLogo}/>
        </Layout>
    )
}

export default Projects
