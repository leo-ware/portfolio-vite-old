import styled from "styled-components"
import Layout from "../../components/Layout"
import { HeaderContainer } from "../../components/Text"
import cv from "./cv.json"
import Section from "../../components/Section"

const CVContainer = styled.div`
// width: 100%;
max-width: 900px;
height: 100%;
ul {
    font-size: 0.8em;
    margin: 10px;
    // margin-top: 0;
}
p {
    font-size: 0.8em;
}
`

const SectionContent = styled.div`
max-width: 600px;
margin-left: 8%;
`

const HorizontalContainer = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
max-width: 600px;
`

const Job: React.FC<{job: (typeof cv)["Experience"][0]}> = ({job}) => {
    return (
        <SectionContent>
            <HorizontalContainer>
                <h5>{job.Company}</h5>
                <p>{job.Dates}</p>
            </HorizontalContainer>
            <HorizontalContainer>
                <p>{job.Title}</p>
                <p>{job.Location}</p>
            </HorizontalContainer>
            <ul>
                {job.Description.map(d => <li>{d}</li>)}
            </ul>
        </SectionContent>
    )
}

const School: React.FC<{education: (typeof cv)["Education"][0]}> = ({education}) => {
    return (
        <SectionContent>
            <h5>{education.Institution}</h5>
            <p>{education.Degree}</p>
            <p>{education.Location}</p>
        </SectionContent>
    )
}

const CV = () => {
    return (
        <Layout>
            <CVContainer>
                <HeaderContainer>
                    <h1>Resume</h1>
                </HeaderContainer>
                <Section title="Experience">
                    {cv.Experience.map(e => <Job job={e}/>)}
                </Section>
                <Section title="Education">
                    {cv.Education.map(e => <School education={e}/>)}
                </Section>
                <Section title="Awards">
                    {cv.Awards.map(a => <p>{a}</p>)}
                </Section>
            </CVContainer>
        </Layout>
    )
}

export default CV