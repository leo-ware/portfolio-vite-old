import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { HideMobile, HideDesktop } from './Responsive';
// import { Link } from 'react-router-dom'
const Container = styled.div `
position: relative;
width: 100%;
height: 100%;
padding: 0 2%;
background-color: white;

display: flex;
justify-content: space-between;
align-items: center;
`;
const LinkContainer = styled.div `
    font-size: 20px;
    padding: 5px 20px;
`;
const NavbarLinksContainer = styled.div `
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
const NavbarLinks = ({ vertical }) => {
    return (_jsxs(NavbarLinksContainer, { style: { flexDirection: vertical ? "column" : "row" }, children: [_jsx(LinkContainer, { children: "About" }), _jsx(LinkContainer, { children: "Projects" }), _jsx(LinkContainer, { children: "CV" })] }));
};
const ButtonBar = styled.div `
    // width: 30px;
    height: 3px;
    background-color: black;
`;
const ButtonContainer = styled.div `
    width: 25px;
    height: 20px;
    margin: 0 25px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: stretch;
`;
const DropDownContainer = styled.div `
    position: relative;
    top: 0;
    transition: top 0.2s ease-in-out;
    width: 100%;
    z-index: 0;
    border-bottom: 1px solid black;
    // background-color: white;
`;
const Navbar = ({ display }) => {
    const [open, setOpen] = useState(false);
    const ddTop = open ? 0 : -120;
    useEffect(() => {
        if (!display) {
            setOpen(false);
        }
    }, [display]);
    return (_jsxs(_Fragment, { children: [_jsxs(Container, { style: { zIndex: 1 }, onResize: console.log, children: [_jsx(LinkContainer, { children: "Leo Ware" }), _jsx(HideMobile, { children: _jsx(NavbarLinks, {}) }), _jsx(HideDesktop, { children: _jsxs(ButtonContainer, { onClick: () => setOpen(!open), children: [_jsx(ButtonBar, {}), _jsx(ButtonBar, {}), _jsx(ButtonBar, {})] }) })] }), _jsx(DropDownContainer, { style: { top: ddTop }, children: _jsx(HideDesktop, { children: _jsx(NavbarLinks, { vertical: true }) }) })] }));
};
export default Navbar;
