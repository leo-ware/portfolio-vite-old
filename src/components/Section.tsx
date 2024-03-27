import styled from "styled-components"

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

const Section: React.FC<{title: string, children?: React.ReactNode}> = (props) => {
    return (
        <CategoryContainer>
            <CategoryHeader>
                <h3>{props.title}</h3>
            </CategoryHeader>
            <CategoryContent>
                {props.children}
            </CategoryContent>
        </CategoryContainer>
    )
}

export default Section