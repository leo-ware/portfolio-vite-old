import React, { useState } from "react"
import styled from "styled-components"
import {Link} from "react-router-dom"

import Layout from "../components/Layout"
import { HeaderContainer } from "../components/Text"
import { essays } from "./essays/Essays"
// import Tag from "../components/Tag"
import Section from "../components/Section"


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

const CategorySpacer = styled.br`
height: 20px;
`

type Interesting = {
    title: string,
    desc: string,
    slug: string,
    tags?: string[],
}

const Category: React.FC<{title: string, content: Interesting[], onSelectTag?: (name: string) => void}> = (props) => {
    return (
        <Section title={props.title}>
                {props.content.map((item, i) => (
                    <div>
                        <Link to={item.slug}>
                            <h4>{item.title}</h4>
                        </Link>
                        <p>{item.desc}</p>
                        {i !== props.content.length - 1 && <CategorySpacer/>}
                    </div>
                ))}
        </Section>
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
            {/* <FilteredTagsContainer>
                {filteredTags.length > 0 && <>
                    Filters: {filteredTags.map(tag => (
                        <Tag key={tag} name={tag} onRemove={() => onRemoveTag(tag)}/>
                    ))}
                </>}
            </FilteredTagsContainer> */}
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
