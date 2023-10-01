import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'

import { HideMobile, HideDesktop } from './Responsive'
// import { Link } from 'react-router-dom'

const Container = styled.div`
position: relative;
width: 100%;
height: 100%;
padding: 0 2%;
background-color: white;

font-weight: 600;

display: flex;
justify-content: space-between;
align-items: center;
`

const LinkContainer = styled(Link)`
    font-size: 20px;
    padding: 5px 20px;
    color: black;
    text-decoration: none;
`

const NavbarLinksContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const NavbarLinks: React.FC<{vertical?: boolean}> = ({vertical}) => {
    return (
        <NavbarLinksContainer style={{flexDirection: vertical? "column" : "row"}}>
            <LinkContainer to='/about'>About</LinkContainer>
            <LinkContainer to='/projects'>Projects</LinkContainer>
            <LinkContainer to='/cv'>CV</LinkContainer>
        </NavbarLinksContainer>
    )
}

const ButtonBar = styled.div`
    // width: 30px;
    height: 3px;
    background-color: black;
`

const ButtonContainer = styled.div`
    width: 25px;
    height: 20px;
    margin: 0 25px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: stretch;
`

const DropDownContainer = styled.div`
    position: relative;
    top: 0;
    transition: top 0.2s ease-in-out;
    width: 100%;
    z-index: 0;
    border-bottom: 1px solid black;
    background-color: white;
`

const Navbar: React.FC<{display: boolean}> = ({display}) => {
    const [open, setOpen] = useState(false)
    const ddTop = open ? 0 : -120

    useEffect(() => {
        if (!display) {
            setOpen(false)
        }
    }, [display])

    return (
        <>
            <Container style={{zIndex: 1}} onResize={console.log}>
                <LinkContainer to={"/"}>Leo Ware</LinkContainer>
                <HideMobile>
                    <NavbarLinks/>
                </HideMobile>
                <HideDesktop>
                    <ButtonContainer onClick={() => setOpen(!open)}>
                        <ButtonBar/>
                        <ButtonBar/>
                        <ButtonBar/>
                    </ButtonContainer>
                </HideDesktop>
            </Container>
            <DropDownContainer style={{top: ddTop}}>
                <HideDesktop>
                    <NavbarLinks vertical/>
                </HideDesktop>
            </DropDownContainer>
        </>
    )
}

export default Navbar