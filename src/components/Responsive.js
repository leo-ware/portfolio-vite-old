import { styled } from "styled-components";
export const HideMobile = styled.div `
@media (max-width: 600px) {
    display: none;
}
`;
export const HideDesktop = styled.div `
@media (min-width: 600px) {
    display: none;
}
`;
