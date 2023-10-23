import Layout from "../../components/Layout"
import { HeaderContainer } from "../../components/Text"
import Container from "../../components/ShrinkContainer"

const CausalDict = () => {
    return (
        <Layout title="Causal: dict | Projects">
            <Container>
            <HeaderContainer>
                <h1>
                    Causal: dict
                </h1>
            </HeaderContainer>

            <p>
                Causal: dict is an educational resource I am developing for learning the key ideas of structual causal inference.
                It started as a set of notes I built for myself while working on my capstone.
                Working through some of the papers at the research frontier, I realized that there were really no good resources
                 explaining the algorithms used in the field. So, I decided to expand my notes into a full website
                for others to use.
            </p>

            <br/>

            <p>
                I'm still working to build this out, but you can find the current version at <a href="https://causal.leoware.io">causal.leoware.io</a>.
            </p>
        
            </Container>
        </Layout>    
    )
}

export default CausalDict