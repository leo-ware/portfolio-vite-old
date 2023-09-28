import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

import Navbar from './Navbar'

const Container = styled.div`
position: relative;
width: 100vw;
height: 100vh;
background-color: red;
overflow-x: hidden;
`

const NavbarContainer = styled.div`
position: fixed;
transition: top 0.2s ease-in-out;

width: 100%;
height: 60px;
background-color: blue;
border-bottom: 1px solid black;
`

const ContentOuter = styled.div`
background-color: green;
display: flex;
min-height: 100%;
width: 100%;
padding: 70px 15%;
`

const ContentLeft = styled.div`
background-color: pink;
flex-grow: 1;
flex-basis: 0;
`

const ContentInner = styled.div`
background-color: yellow;
flex-grow: 1.5;
flex-basis: 0;
padding; 0 10%;
`

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {

    const childrenLeft = "foo"

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
            <NavbarContainer style={{top: navTop}}>
                <Navbar display={showNav}/>
            </NavbarContainer>
            <ContentOuter>
                {childrenLeft && <ContentLeft>
                    {childrenLeft}
                </ContentLeft>}
                <ContentInner>
                    {children}
                </ContentInner>
            </ContentOuter>
        </Container>
    )
}

export default Layout