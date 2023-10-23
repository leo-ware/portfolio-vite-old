import styled from "styled-components"

const ContainerOuter = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
margin-bottom: 100px;
`

const ContainerInner = styled.div`
flex-grow: 1;
flex-basis: 500px;
`

const ContainerSpacer = styled.div`
flex-basis: 150px;
flex-grow: 0;
flex-shrink: 4;
`

const Container = (props: {children: React.ReactNode}) => {
    return (
        <ContainerOuter>
            <ContainerSpacer/>
            <ContainerInner>
                {props.children}
            </ContainerInner>
            <ContainerSpacer/>
        </ContainerOuter>
    )
}

export default Container