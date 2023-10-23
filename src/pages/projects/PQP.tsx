// import styled from "styled-components"

import Layout from "../../components/Layout"
import { HeaderContainer } from "../../components/Text"
import FeatureCard from "../../components/FeatureCard"
import CodeBlock from "../../components/CodeBlock"
import ShrinkContainer from "../../components/ShrinkContainer"

import FDViz from "../../assets/frontdoor_viz.png"
// import TOC from "../../components/TOC"

const Modeling = () => {
    const code = `
from pqp.symbols import make_vars
from pqp.identification import Graph

x, y, z = make_vars("xyz")
g = Graph([
    x & y,
    z <= x,
    y <= z,
])
g.draw()`
    return (
        <FeatureCard
            title={"Modeling"}
            links={[
                ["identification.Graph", "https://leo-ware.github.io/pqp/api/pqp.identification.Graph.html#pqp.identification.Graph"],
                ["symbols.make_vars", "https://leo-ware.github.io/pqp/api/pqp.symbols.make_vars.html#pqp.symbols.make_vars"],
            ]}
            tabs={[
                ["code", <CodeBlock code={code}/>],
                ["output", <img style={{width: 200}} src={FDViz}/>]
            ]}>
                Users specify assumptions in the form of a graph. Directed edges indicate possible causal relationships,
                while undirected edges indicate possible confounding. Visualization tools make it easy to
                understand and communicate assumptions.
        </FeatureCard>
    )
}

const Identification = () => {
    const code = `
from pqp.identification import ATE

treatment_condition = [x.val == 1]
control_condition = [x.val == 0]
causal_estimand = ATE(y, treatment_condition, control_condition)

estimand = g.identify(causal_estimand).identified_estimand
`

    return (
        <FeatureCard
            title={"Identification"}
            links={[
                ["identification.ATE", "https://leo-ware.github.io/pqp/api/pqp.identification.ATE.html#pqp.identification.ATE"],
                ["identify", "https://leo-ware.github.io/pqp/api/pqp.identification.Graph.html#pqp.identification.Graph.identify"]
            ]}
            tabs={[
                ["code", <CodeBlock code={code} height={"100%"}/>],
            ]}>
                During identification, PQP will determine whether it's possible to estimate the causal effect
                given the assumptions in the graph. If so, it will find a strategy for estimation in the form
                of an abstract statistical estimator.
        </FeatureCard>
    )
}

const Estimation = () => {
    const code = `
from pqp.estimation import MultinomialEstimator
estimator = MultinomialEstimator(data) # data is a pandas dataframe
estimator.estimate(estimand)
`
    return (
        <FeatureCard
            title="Estimation"
            links={[
                ["estimation.MultinomialEstimator", "https://leo-ware.github.io/pqp/api/pqp.estimation.MultinomialEstimator.html#pqp.estimation.MultinomialEstimator"],
                ["estimation.EstimationResult", "https://leo-ware.github.io/pqp/api/pqp.estimation.EstimationResult.html#pqp.estimation.EstimationResult"]
            ]}
            tabs={[
                ["code", <CodeBlock code={code} height="100%"/>],
                ["data", "foo"],
            ]}>
            Based on parametric assumptions about the data, PQP will crunch the numbers and generate
            a point estimate of the causal effect.
        </FeatureCard>
    )
}

// const TOCContainer = styled.div`
//     padding-top: 200px;
// `

const PQP = () => {
    return (
        <Layout
            title={"PQP | Projects"}
            // childrenLeft={
            //     <TOCContainer>
            //         <TOC/>
            //     </TOCContainer>
            // }
            >
            <ShrinkContainer>
                <HeaderContainer>
                    <h1>PQP</h1>
                </HeaderContainer>


                <p>
                    PQP (short for <em>pourquoi pas?</em>) is an open-source library I built for causal inference on observational datasets.
                    It's designed to be used by data scientists and domain experts who don't have a background
                    in statistics or econometrics, but who want to use the powerful tools being developed at
                    the cutting edge of causal inference research.
                </p>

                <br/>

                <p>
                    What is true of statistics in general is especially true in causal inference: an
                    analysis is no better than its assumptions.
                    PQP takes this seriously by putting assumption-design directly in the hands of the user, abstracting
                    over all other implementation details.
                    Performing a causal analysis with PQP is as simple as specifying the assumptions you're willing to make
                    and the problem you're trying to solve.
                </p>

                <br/>

                <p>
                    The core algorithms are written in Rust, and the Python API is built on top of PyO3.
                    You can find the docs <a href="https://leo-ware.github.io/pqp/">here</a>.
                </p>

                <h2>Workflow</h2>            
                <Modeling/>
                <br/>
                <Identification/>
                <br/>
                <Estimation/>

                <h2>Conceptual Guide</h2>

                <p>
                    Measuring a causal effect fundamentally requires three things: a set of assumptions about the causal structure
                    of the data generating process, a parametric model of the joint distribution of the observed variables, and 
                    a specification of the effect you want to measure (called the causal estimand).
                    The parametric model can generally be any kind of statistical or machine learning model, as long as it
                    can explicitly model the joint distribution. It takes special formalisms to represent the causal assumptions
                    and the causal estimand.
                </p>

                <br/>

                <p>
                    The causal assumptions are encoded in a <a href="https://causal-dict.vercel.app/Intro/Causal%20Graphs">graph</a>,
                    where directed edges indicate possible causal relationships
                    and undirected edges indicate possible confounding.
                    The causal estimand is represented using a probability
                    involving <a href="https://causal-dict.vercel.app/Intro/Do%20Expressions">do-expressions</a>.
                </p>

                <br/>

                <p>
                    PQP works through two steps to generate a point estimate of the causal effect.
                </p>

                <ul>
                    <li>
                        <strong>Identification</strong> is the process of figuring out whether there is enough information in the
                        dataset to estimate the causal effect. Sometimes, it's not possible to disentangle the various ways 
                        that the variables can interact.
                        If it's possible to estimate the effect, identification will determine a strategy for doing so, called the statistical estimand.
                    </li>
                    <br/>
                    If it's possible to estimate the effect, identification will determine a strategy for doing so, called the statistical estimand.
                    Often, this will be a list of variables that you need to control for, but these can sometimes be quite complicated.
                    
                    <br/>
                    <br/>

                    <li>
                        <strong>Estimation</strong> is the process of using the parametric model and statistical estimand to derive
                        a point estimate of the causal effect. This problem has exponential time complexity in the number of variables.
                        Currently, PQP relies on quantizing the data and brute forcing this problem, but numerical estimators are in the works.
                    </li>
                </ul>

                <p>
                    PQP relies on Shpitser's ID algorithm for identification, which is complete and polynomial time.
                    I.e., it will always succeed in identifying the effect if this is possible with the given information, and it
                    will do so in a way which is reasonably computationally efficient.
                </p>
            </ShrinkContainer>
        </Layout>
    )
}

export default PQP