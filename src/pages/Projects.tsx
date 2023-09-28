import React from "react"
import styled from "styled-components"

import Layout from "../components/Layout"
import { HeaderContainer } from "../components/Text"


const ThumbnailContainer = styled.div`
    width: 80%;
    height: 125px;
    border-left: 2px solid black;
    margin: 15px 10%;
    padding: 12px;
`

const ThumbnailTextContainer = styled.div`
    width: 100%;
    height: 100%;
    margin-left: 125px;
`

const ProjectThumbnail: React.FC<{title: string, desc: string, img: string}> = (props) => {
    return (
        <ThumbnailContainer>
            <div style={{
                backgroundColor: "grey",
                width: 100,
                height: 100,
                float: "left",
            }}/>
            <ThumbnailTextContainer>
                <h3>{props.title}</h3>
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
                desc={"stuff"}
                img={""}/>
            <ProjectThumbnail
                title={"PQP"}
                desc={"stuff"}
                img={""}/>
            <ProjectThumbnail
                title={"PQP"}
                desc={"stuff"}
                img={""}/>
        </Layout>
    )
}

export default Projects
