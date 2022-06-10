import Projects from "../data/projects.json";

const Project1Data = Projects.find(({title}) => title === 'PWA');

const PWA = () => {

    return (
        <>
        <h2>test</h2>
            <h1>{Project1Data?.title}</h1>
            <p>{Project1Data?.description}</p>
        </>
    );
}

export default PWA;