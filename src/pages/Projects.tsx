import React, { useState } from "react"
import styled from "styled-components"
import {Link} from "react-router-dom"

import Layout from "../components/Layout"
import { HeaderContainer } from "../components/Text"
import { essays } from "./essays/Essays"
import Tag from "../components/Tag"
// import PQPLogo from "../assets/pqp_logo.ico"
// import CDLogo from "../assets/causaldict_logo.svg"
// import TGLogo from "../assets/message-square.svg"


const ContentContainer = styled.div`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
`

const ContentContainerInner = styled.div`
max-width: 800px;
width: 800px;
`

const CategoryContainer = styled.div`
border-left: 2px solid black;
margin-bottom: 20px;
padding-left: 10px;
display: flex;
flex-direction: row;
align-items: flex-start;
justify-content: flex-start;
transition: height 0.5s ease;
`

const CategoryHeader = styled.div`
width: 100px;
flex: 0 0 150px;
`

const CategoryContent = styled.div`
padding: 0;
flex-grow: 1;
`

const CategorySpacer = styled.br`
height: 20px;
`

const ThumbnailContainer = styled.div`
width: 80%;
// margin-bottom: 20px;

@media (min-width: 800px) {
    width: 70%;
    // margin: 15px 15%;
    max-width: 60vw;
}

// border-left: 1px solid black;
@media (min-width: 600px) {
    height: 80px;
    // border-left: 2px solid black; 
}

a {
    text-decoration: none;
    color: black;
    &:hover {
        color: grey;
    }
}

p {
    margin: 0;
}
`

const FilteredTagsContainer = styled.div`
width: 100%;
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
height: 30px;
margin-bottom: 20px;
`

const ProjectThumbnail: React.FC<{title: string, desc: string, tags?: string[], slug?: string, onSelectTag?: (name: string) => void}> = (props) => {
    const linkTo = props.slug || "/404"
    return (
        <ThumbnailContainer>
            <Link to={linkTo}>
                <h4>{props.title}</h4>
            </Link> 
            <p>{props.desc}</p>
            {/* <p>
                {(props.tags || []).map(tag => <Tag name={tag} onClick={() => props.onSelectTag && props.onSelectTag(tag)}/>)}
            </p> */}
        </ThumbnailContainer>
    )
}

type Interesting = {
    title: string,
    desc: string,
    slug: string,
    tags?: string[],
}

const Category: React.FC<{title: string, content: Interesting[], onSelectTag?: (name: string) => void}> = (props) => {
    return (
        <CategoryContainer>
            <CategoryHeader>
                <h3>{props.title}</h3>
            </CategoryHeader>
            <CategoryContent>
                {props.content.map((item, i) => (
                    <>
                        <ProjectThumbnail
                            title={item.title}
                            desc={item.desc}
                            slug={item.slug}
                            tags={item.tags}
                            onSelectTag={props.onSelectTag}/>
                        {i !== props.content.length - 1 && <CategorySpacer/>}
                    </>
                ))}
            </CategoryContent>
        </CategoryContainer>
    )
}

const projects = [
    {title: "PQP", tags: ["python", "rust", 'causal-inference'], desc: "An open-source library for end-to-end structural causal modeling written in Rust.", slug: "/code/pqp"},
    {title: "Causal: dict", desc: "A educational resource for learning the key ideas of causal inference.", slug: "/code/causal-dict"},
    {title: "TutorGPT", desc: "An LLM-based tool for learning a foreign language through immersion.", slug: "/code/tutorgpt"}
]

const Projects = () => {
    const fromEssays = essays.map(e => ({...e, _contentType: "essay"}))
    const fromProjects = projects.map(p => ({...p, _contentType: "project"}))


    const [filteredTags, setFilteredTags] = useState<string[]>([])
    const [noEssays] = useState<boolean>(false)
    const [noProjects] = useState<boolean>(false)

    const showEssays = !noEssays && (
        filteredTags.length > 0 ?
            fromEssays.filter(e => (e.tags || []).some(t => filteredTags.includes(t)))
            : fromEssays
    ) || []
    const showProjects = !noProjects && (
        filteredTags.length > 0 ?
            fromProjects.filter(p => (p.tags || []).some(t => filteredTags.includes(t)))
            : fromProjects
    ) || []
    
    const onSelectTag = (tag: string) => {
        setFilteredTags([...filteredTags, tag])
    }

    const onRemoveTag = (tag: string) => {
        setFilteredTags(filteredTags.filter(t => t !== tag))
    }

    return (
        <Layout>
            <HeaderContainer>
                <h1>Projects</h1>
            </HeaderContainer>
            <FilteredTagsContainer>
                {filteredTags.length > 0 && <>
                    Filters: {filteredTags.map(tag => (
                        <Tag key={tag} name={tag} onRemove={() => onRemoveTag(tag)}/>
                    ))}
                </>}
            </FilteredTagsContainer>
            <ContentContainer>
                <ContentContainerInner>
                    {showEssays.length > 0 &&
                        <Category
                            title={"Essays"}
                            content={showEssays}
                            onSelectTag={onSelectTag}/>}
                    {showProjects.length > 0 &&
                        <Category
                            title={"Projects"}
                            content={showProjects}
                            onSelectTag={onSelectTag}/>}
                </ContentContainerInner>
            </ContentContainer>
        </Layout>
    )
}

export default Projects
