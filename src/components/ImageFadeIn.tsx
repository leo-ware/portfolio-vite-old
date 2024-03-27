import { useState } from "react"
import styled from "styled-components"

type ImageType = {
    src: string,
    alt: string,
    width?: number | string,
    height?: number | string,
}

const Img = styled.img`
    width: 100%;
    height: auto;
    object-fit: cover;
    transition: opacity 0.1s;
    opacity: 0;
`

const ImageFadeIn: React.FC<ImageType> = ({ src, alt, width, height}) => {
    const [loaded, setLoaded] = useState(false)
    return (
        <Img
            style={{opacity: loaded ? 1 : 0, width, height}}
            src={src}
            alt={alt}
            onLoad={() => setLoaded(true)}/>
    )
}

export default ImageFadeIn