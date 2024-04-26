import styled from "styled-components"

const CategoryContainer = styled.div`
border-left: 2px solid black;
margin: 0 10%;
margin-bottom: 20px;
padding-left: 10px;

display: flex;
flex-direction: row;
align-items: flex-start;
justify-content: space-between;

@media (max-width: 800px) {
    flex-direction: column;
    justify-content: flex-start;
    border-left: none;
    margin: 0;
    padding-bottom: 15px;
}
`

const CategoryHeader = styled.div`
width: 100px;
flex-grow: 1;
flex-basis: 75px;
padding-right: 10px;

@media (max-width: 800px) {
    width: 100%;
    flex-grow: 0;
    flex-basis: 25px;
    margin-bottom: 10px;

    border-left: 2px solid black;
    padding-left: 10px;
}
`

const CategoryContent = styled.div`
padding: 0;
flex-grow: 1;
flex-basis: 450px;

@media (max-width: 800px) {
    flex-grow: 0;
    flex-basis: 0;
}
`

const Section: React.FC<{title: string, children?: React.ReactNode, backgroundColor?: string}> = (props) => {
    return (
        <CategoryContainer style={{backgroundColor: props.backgroundColor}}>
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