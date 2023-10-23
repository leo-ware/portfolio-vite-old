import styled from "styled-components"
import { ReactNode } from "react"

import Tabs from "./Tabs"

const FeatureContainer = styled.div`
width: 100%;
display: flex;
justify-content: space-between;
@media (max-width: 800px) {
    flex-direction: column;
}
margin: 15px 0;
`

const FeatureInner = styled.div`
flex-grow: 1;
padding-right: 15px;
`

const FeatureTitle = styled.div`
font-weight: bold;
font-size: 1.2em;
`

const FeatureText = styled.div`
margin: 5px 0;
`

const FeatureLinkBox = styled.div`
width: 100%;
display: flex;
`

const FeatureLink = styled.a`
font-size: 14px;
background-color: lightgrey;
text-decoration: none;
border-radius: 12px;
padding: 1px 9px;
margin-left: 8px;

&:hover {
    text-decoration: underline;
}
`

const Spacer = styled.div`
width: 10px;
height: 10px;
`

const TabsContainer = styled.div`
flex-basis: 375px;
flex-grow: 0;
flex-shrink: 0;
`

const FeatureCard = (props: {title: string, children: ReactNode, tabs?: [string, ReactNode][], links?: [string, string][],}) => {
    return (
        <FeatureContainer>
            <FeatureInner>
                <FeatureTitle>
                    {props.title}
                </FeatureTitle>
                <FeatureText>
                    {props.children}
                </FeatureText>
                <FeatureLinkBox>
                    <strong>Docs</strong>
                    {props.links?.map((link) => {
                        return <FeatureLink href={link[1]} target="_blank">{link[0]}</FeatureLink>
                    })}
                </FeatureLinkBox>
            </FeatureInner>
            <Spacer/>
            <TabsContainer>
                <Tabs tabs={props.tabs || []} width={375} height={250}/>
            </TabsContainer>
        </FeatureContainer>
    )
}

export default FeatureCard