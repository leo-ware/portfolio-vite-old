import React, { useState } from 'react'
import styled from 'styled-components'
import {Helmet} from 'react-helmet'

import Navbar from './Navbar'
import { HideMobile } from './Responsive'

const Container = styled.div`
position: relative;
width: 100vw;
height: 100vh;
overflow-x: hidden;
`

const NavbarContainer = styled.div`
position: fixed;
transition: top 0.2s ease-in-out;

width: 100%;
height: 60px;
border-bottom: 1px solid black;
`

const ContentOuter = styled.div`
display: flex;
min-height: 100%;
width: 100%;
padding: 70px 15%;
@media (max-width: 1050px) {
    padding: 70px 5%;
}
`

const ContentLeft = styled(HideMobile)`
flex-grow: 1;
flex-basis: 0;
`

const ContentInner = styled.div`
flex-grow: 1.5;
flex-basis: 0;
padding; 0 10%;
`

const Layout: React.FC<{ title?: string, children: React.ReactNode, childrenLeft?: React.ReactNode }> = (props) => {

    const [showNav, setShowNav] = useState(true)
    const navTop = showNav ? 0 : -85
    const prevScrollY = React.createRef<number>()

    // still has annoying behavior when you scroll up slowly
    const handleScroll: React.UIEventHandler<HTMLDivElement> = (e) => {
        const currentScrollY = e.currentTarget.scrollTop
        const scrollingUp = prevScrollY.current && prevScrollY.current >= currentScrollY
        if (currentScrollY > 60 && !scrollingUp) {
            setShowNav(false)
        } else {
            setShowNav(true)
        }
        // @ts-ignore
        prevScrollY.current = currentScrollY
    }

    return (
        <Container onScroll={handleScroll}>
            <Helmet 
                title={props.title || ""}
                link={[
                    { rel: 'icon', type: 'image/png', href: "public/favicon.png" }
                ]}/>
            <NavbarContainer style={{top: navTop}}>
                <Navbar display={showNav}/>
            </NavbarContainer>
            <ContentOuter>
                {props.childrenLeft && 
                    <ContentLeft>
                        {props.childrenLeft}
                    </ContentLeft>}
                <ContentInner>
                    {props.children}
                </ContentInner>
            </ContentOuter>
        </Container>
    )
}

export default Layout