import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import styled from "styled-components";
import Layout from "../components/Layout";
import SocialLinks from "../components/SocialLinks";
import MeBig from "../assets/me-sitting.png";
const ImgContainer = styled.div `
height: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: flex-end;
`;
const TextContainer = styled.div `
height: 100%;
display: flex;
flex-direction: column;
padding-top: 25px;

@media (min-width: 600px) {
    justify-content: center;
    margin-left: 35px;
}
`;
const BigImg = styled.img `
    width: 250px;
`;
const About = () => {
    return (_jsx(Layout, { childrenLeft: _jsx(ImgContainer, { children: _jsx(BigImg, { src: MeBig }) }), children: _jsxs(TextContainer, { children: [_jsx("h1", { children: "Hi, I'm Leo" }), _jsx("p", { style: { maxWidth: 350 }, children: "I make computers do interesting things. Check out my work on my projects page, or reach out below." }), _jsx(SocialLinks, {})] }) }));
};
export default About;
