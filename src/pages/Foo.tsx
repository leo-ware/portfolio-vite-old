import Layout from "../components/Layout";
import Section from "../components/Section";
import { HeaderContainer } from "../components/Text";


const Foo = () => {
    return (
        <Layout>
            <HeaderContainer>
                <h1>Foo</h1>
            </HeaderContainer>
            <Section title={"Foo Title"}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi consectetur venenatis viverra. Nulla a efficitur diam, ut accumsan nibh. Donec egestas diam a lectus vulputate rhoncus at et metus. Etiam vel metus maximus, varius eros sed, efficitur sem. Mauris sem diam, efficitur eget sollicitudin eget, tempus quis lectus. Praesent tortor ex, scelerisque vel pulvinar et, placerat vitae enim. Maecenas fermentum tellus diam, at gravida mi ultrices et. Sed dapibus ultricies enim eu elementum. Phasellus tellus tortor, fermentum non fermentum quis, bibendum at eros. In mauris metus, pellentesque eu interdum nec, imperdiet sit amet odio.

                {/* Quisque ante sapien, ornare ut egestas ac, interdum in purus. Proin eu pellentesque sapien, id eleifend urna. Suspendisse eu neque lobortis, faucibus mauris sit amet, dictum nulla. Duis non accumsan ipsum. Phasellus nec quam leo. Aliquam vestibulum eget nunc vel accumsan. Aliquam ut quam nibh. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque ultricies, velit vitae tincidunt lobortis, tortor diam tincidunt ex, eu lacinia justo nisl et lectus. Pellentesque gravida eros quis tellus fermentum, vitae tristique odio pretium. */}
            </Section>
            <Section title={"Foo Title 2"}>
                Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; In lorem ex, condimentum id hendrerit eu, eleifend vulputate nunc. Vivamus gravida, erat in vestibulum ultricies, quam odio fermentum nisl, vehicula tempor ex tortor at lacus. Fusce et tristique orci. Aliquam laoreet libero vel sem lobortis, quis molestie dui dapibus. Vestibulum aliquet rhoncus sem sed interdum. Nunc ultricies nunc nisi, vitae dictum nibh dictum et. In vehicula porta interdum.
            </Section>

        </Layout>
    );
}

export default Foo;