import React from "react"
import styled from "styled-components"

import GH from '../assets/gh_bw.png'
import LI from '../assets/li_bw.png'
import MD from '../assets/md_bw.png'
import TG from '../assets/tg_bw.png'
import ImageFadeIn from "./ImageFadeIn"

const ImgContainer = styled.div`
    padding: 0;
    margin: 25px 5px;
`

const Container = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
`

const SocialLinks: React.FC = () => {
    return (
        <Container>
            <a href="https://github.com/leo-ware" target="_blank">
                <ImgContainer>
                    <ImageFadeIn src={GH} alt={"GitHub Logo"} width={30} height={30}/>
                </ImgContainer>
            </a>
            <a href="https://www.linkedin.com/in/leo-ware-8b8580b6/" target="_blank">
                <ImgContainer>
                    <ImageFadeIn src={LI} alt={"LinkedIn Logo"} width={30} height={30}/>
                </ImgContainer>
            </a>
            <a href="https://medium.com/@leoware" target="_blank">
                <ImgContainer>
                    <ImageFadeIn src={MD} alt={"Medium Logo"} width={30} height={30}/>
                </ImgContainer>
            </a>
            <a href="https://t.me/leoware" target="_blank">
                <ImgContainer>
                    <ImageFadeIn src={TG} alt={"Telegram Logo"} width={30} height={30}/>
                </ImgContainer>
            </a>
        </Container>
    )
}

export default SocialLinks