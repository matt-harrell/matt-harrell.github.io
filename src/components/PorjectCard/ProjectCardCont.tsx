
import Projects from '../../data/projects.json';
import ProjectCardComp from './ProjectCardComp';

interface ProjectCardContProps {
    nameOfProject:string;
    sizeXS:number;
    sizeSM:number;
    sizeMD:number;
}

const ProjectCardCont = (props:ProjectCardContProps) => {
   

   const ProjectCards = Projects.find(({title}) => title === props.nameOfProject);
   
//    ProjectCards?.map((project:Project,i:number) => 
//    {

//    let path = project.title;
//    let pathURL = path.replaceAll(' ', '-').toLowerCase();

//    let description = project.description;
//    let introSentence = description.split('.')

   
//    return <ProjectCardComp 
//     title={project.title}
//     key={i} 
//     description={introSentence[0]+'.'}
//     pathURL={pathURL}
//     imageThumbnail={project.images?.thumbnail}
//     />
//     });

    let path = ProjectCards?.title;
   let pathURL = path?.replaceAll(' ', '-').toLowerCase();

//    let description = ProjectCards?.description;
//    let introSentence = description?.split('.')
    

    return (
        <ProjectCardComp 
    title={ProjectCards?.title}
    description={ProjectCards?.description}
    pathURL={pathURL}
    imageThumbnail={ProjectCards?.images?.thumbnail}
    sizeXS={props.sizeXS}
    sizeSM={props.sizeSM}
    sizeMD={props.sizeMD}
    />
    );
}

export default ProjectCardCont;