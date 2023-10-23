import styled from 'styled-components'
// @ts-ignore
import Highlight from 'react-highlight'
import "../../node_modules/highlight.js/styles/a11y-light.css"

// the highlighter supports more languages than this, add more if needed
type Language = "python" | "javascript"

const CodeBlockContainer = styled.div`
pre {
    margin: 0;
    height: 100%;
}

code {
    box-sizing: border-box;
    height: 100%;
    overflow: hidden;

    &:hover {
        overflow: auto;
    }
}
`

const CodeBlock = (props: {code: string, language?: Language, height?: string | number}) => {
    const language = props.language || "python"
    return (
        <CodeBlockContainer style={{height: props.height}}>
            <Highlight className={language}>
                {props.code.trim()}
            </Highlight>
        </CodeBlockContainer>
    )
}

export default CodeBlock