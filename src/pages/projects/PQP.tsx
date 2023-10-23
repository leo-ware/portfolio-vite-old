// import styled from "styled-components"

import Layout from "../../components/Layout"
import { HeaderContainerLeft } from "../../components/Text"
import FeatureCard from "../../components/FeatureCard"
import CodeBlock from "../../components/CodeBlock"

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
            <HeaderContainerLeft>
                <h1>PQP</h1>
            </HeaderContainerLeft>


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

            <h2>Workflow</h2>            
            <Modeling/>
            <Identification/>
            <Estimation/>

        </Layout>
    )
}

export default PQP