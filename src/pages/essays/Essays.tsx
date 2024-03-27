import Markdown from "react-markdown"
import foo from "./foo.json"
import Layout from "../../components/Layout"
import { fromMarkdown } from "mdast-util-from-markdown"
import { toc } from "mdast-util-toc"
import { Nodes } from "mdast"
import styled from "styled-components"

const renderMdast = (node: Nodes) => {
    switch (node.type) {
        case "heading":
            return <h2>{node.children.map(renderMdast)}</h2>
        case "paragraph":
            return <p>{node.children.map(renderMdast)}</p>
        case "text":
            return node.value
        case "link":
            return <a href={node.url}>{node.children.map(renderMdast)}</a>
        case "list":
            return <ul style={{margin: 0, padding: 0, paddingLeft: 10}}>{node.children.map(renderMdast)}</ul>
        case "listItem":
            return <li>{node.children.map(renderMdast)}</li>
        default:
            return null
    }
}

const TOCContainer = styled.div`
padding-left: 20px;
border-left: 2px solid black;
a {
    text-decoration: none;
    // color: black;
    // &:hover {
    //     color: grey;
    // }
}
`

const TOC: React.FC<{node: Nodes}> = ({node}) => {
    return (
        <TOCContainer>
            {renderMdast(node)}
        </TOCContainer>
    )
}

const EssayContainer = styled.div`
@media (min-width: 600px) {
    margin-top: 50px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
}
`

const EssayContentContainer = styled.div`
padding: 0;
margin: 0;
@media (min-width: 600px) {
    flex-grow: 3;
    flex-basis: 450px;
    padding: 0;
}
`

const EssayTOCContainer = styled.div`
@media (min-width: 600px) {
    position: relative;
    flex-grow: 1;
    flex-basis: 200px;
}
`

const EssayTOCContainerInner = styled.div`
@media (min-width: 600px) {
    position: fixed;
    top: 135px;
    left: 75px;
}
`

const EssayRightSpacer = styled.div`
@media (min-width: 600px) {
    flex-grow: 1;
    flex-basis: 50px;
}
`

const EssayTitle = styled.h1`
margin: 0;
@media (min-width: 600px) {
    margin-bottom: 20px;
}
`


type Essay = {
    title: string,
    content: string,
    slug: string,
}

const EssayRenderer: React.FC<{children: Essay}> = (props) => {
    const tocNode = toc(fromMarkdown(props.children.content), {maxDepth: 2}).map
    return (
        <Layout>
            <EssayContainer>
                <EssayTOCContainer>
                    <EssayTOCContainerInner>
                        <p style={{color: "black"}}>Contents</p>
                        {tocNode && <TOC node={tocNode}/>}
                    </EssayTOCContainerInner>
                </EssayTOCContainer>
                <EssayContentContainer>
                <EssayTitle>{props.children.title}</EssayTitle>
                    
                    <Markdown>
                        {props.children.content}
                    </Markdown>
                </EssayContentContainer>
                <EssayRightSpacer/>
            </EssayContainer>
        </Layout>
    )
}

export const essays = ([
    foo,
]).map(e => ({...e, slug: "/essays/" + e.slug}))

export const essayRoutes = essays.map((essay) => (
    {path: essay.slug, element: <EssayRenderer>{essay}</EssayRenderer>}
    ))