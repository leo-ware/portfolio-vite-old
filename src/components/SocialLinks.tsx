import React from "react"
import styled from "styled-components"

import GH from '../assets/gh_bw.png'
import LI from '../assets/li_bw.png'
import MD from '../assets/md_bw.png'
import TG from '../assets/tg_bw.png'

const Img = styled.img`
    width: 30px;
    height: 30px;
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
            <a href="https://github.com/leo-ware">
                <Img src={GH}/>
            </a>
            <a href="https://www.linkedin.com/in/leo-ware-8b8580b6/">
                <Img src={LI}/>
            </a>
            <a href="https://medium.com/@leoware">
                <Img src={MD}/>
            </a>
            <a href="https://t.me/leoware">
                <Img src={TG}/>
            </a>
        </Container>
    )
}

export default SocialLinks