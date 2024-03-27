import styled from "styled-components"

const TagDiv = styled.span`

font-size: 14px;
color: black;
text-decoration: underline;
margin: 0 3px;

button {
    margin: 0 3px;
    padding: 0;
    border: none;
    background: none;
    color: white;
    font-size: 14px;
    cursor: pointer;
}

&:hover {
    color: grey;
    button {
        color: grey;
    }
}
`

type TagType = {
    name: string,
    onClick?: () => any,
    onRemove?: () => any,
}

const Tag: React.FC<TagType> = (props) => {
    return (
        <TagDiv onClick={props.onClick}>
            #{props.name}
            {props.onRemove &&
                <button onClick={props.onRemove}>x</button>
            }
        </TagDiv>
    )
}

export default Tag