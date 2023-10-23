import { ReactNode, useState } from "react"
import styled from "styled-components"

const TabContainer = styled.div`
// width: 100%;
// height: 100%;
display: flex;
flex-direction: column;
`

const TabContent = styled.div`
border: 1px solid black;
border-bottom: none;
border-top-left-radius: 5px;
border-top-right-radius: 5px;
flex-grow: 1;
padding: 5px;
background-color: rgb(270, 270, 270);
overflow-y: auto;
`

const TabsNavbar = styled.div`
flex-basis: 15px;
display: flex;
`

const TabsNavItem = styled.div`
padding: 2px 5px;
border-top: 1px solid black;
color: grey;
text-decoration: underline;
border-bottom-left-radius: 5px;
border-bottom-right-radius: 5px;
cursor: pointer;
`

const Tabs = (props: {tabs: [string, ReactNode][], width?: number, height?: number}) => {
    // if (props.tabs.length == 0) return "no tabs"

    const [active, setActive] = useState(0)
    return (
        <TabContainer style={{
            minWidth: props.width,
            width: props.width,
            height: props.height
        }}>
            <TabContent>
                {props.tabs[active] && props.tabs[active][1]}
            </TabContent>
            <TabsNavbar>
                {props.tabs.map((tab, i) => {
                    return (
                        <TabsNavItem
                            key={i}
                            style={i == active ? {
                                border: "1px solid black",
                                borderTop: "none",
                                backgroundColor: "rgb(270, 270, 270)",
                            }: {}}
                            onClick={() => setActive(i)}>
                            {tab[0]}
                        </TabsNavItem>
                    )
                })}
                <TabsNavItem style={{flexGrow: 1}}/>
            </TabsNavbar>
        </TabContainer>
    )
}

export default Tabs