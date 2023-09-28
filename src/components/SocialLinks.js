import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import styled from "styled-components";
import GH from '../assets/gh_bw.png';
import LI from '../assets/li_bw.png';
import MD from '../assets/md_bw.png';
import TG from '../assets/tg_bw.png';
const Img = styled.img `
    width: 30px;
    height: 30px;
    margin: 25px 5px;
`;
const Container = styled.div `
    display: flex;
    justify-content: flex-start;
    align-items: center;
`;
const SocialLinks = () => {
    return (_jsxs(Container, { children: [_jsx("a", { href: "https://github.com/leo-ware", children: _jsx(Img, { src: GH }) }), _jsx("a", { href: "https://www.linkedin.com/in/leo-ware-8b8580b6/", children: _jsx(Img, { src: LI }) }), _jsx("a", { href: "https://medium.com/@leoware", children: _jsx(Img, { src: MD }) }), _jsx("a", { href: "https://t.me/leoware", children: _jsx(Img, { src: TG }) })] }));
};
export default SocialLinks;
