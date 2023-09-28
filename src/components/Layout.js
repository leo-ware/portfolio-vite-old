import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React, { useState } from 'react';
import styled from 'styled-components';
import Navbar from './Navbar';
import { HideMobile } from './Responsive';
const Container = styled.div `
position: relative;
width: 100vw;
height: 100vh;
overflow-x: hidden;
`;
const NavbarContainer = styled.div `
position: fixed;
transition: top 0.2s ease-in-out;

width: 100%;
height: 60px;
border-bottom: 1px solid black;
`;
const ContentOuter = styled.div `
display: flex;
min-height: 100%;
width: 100%;
padding: 70px 15%;
`;
const ContentLeft = styled(HideMobile) `
flex-grow: 1;
flex-basis: 0;
`;
const ContentInner = styled.div `
flex-grow: 1.5;
flex-basis: 0;
padding; 0 10%;
`;
const Layout = ({ children, childrenLeft }) => {
    const [showNav, setShowNav] = useState(true);
    const navTop = showNav ? 0 : -85;
    const prevScrollY = React.createRef();
    // still has annoying behavior when you scroll up slowly
    const handleScroll = (e) => {
        const currentScrollY = e.currentTarget.scrollTop;
        const scrollingUp = prevScrollY.current && prevScrollY.current >= currentScrollY;
        if (currentScrollY > 60 && !scrollingUp) {
            setShowNav(false);
        }
        else {
            setShowNav(true);
        }
        // @ts-ignore
        prevScrollY.current = currentScrollY;
    };
    return (_jsxs(Container, { onScroll: handleScroll, children: [_jsx(NavbarContainer, { style: { top: navTop }, children: _jsx(Navbar, { display: showNav }) }), _jsxs(ContentOuter, { children: [childrenLeft &&
                        _jsx(ContentLeft, { children: childrenLeft }), _jsx(ContentInner, { children: children })] })] }));
};
export default Layout;
