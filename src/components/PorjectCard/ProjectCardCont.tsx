
import Projects from '../../data/projects.json';
import ProjectCardComp from './ProjectCardComp';


interface Order{
    xs?:number;
    sm?:number;
}

interface ProjectCardContProps {
    nameOfProject:string;
    sizeXS:number;
    sizeSM:number;
    sizeMD:number;
    customClass?:string;
    order?:Order;
    style?:any;
}

const ProjectCardCont = (props:ProjectCardContProps) => {

   const Project = Projects.find((project) => project.title.thumbnail === props.nameOfProject);
   
   let path = Project?.title.thumbnail;
   let pathURL = path?.replaceAll(' ', '-').toLowerCase();

   
    


    return (
    <ProjectCardComp 
    title={Project?.title.thumbnail}
    description={Project?.introSentence}
    pathURL={pathURL}
    imageThumbnail={Project?.images?.thumbnail}
    sizeXS={props.sizeXS}
    sizeSM={props.sizeSM}
    sizeMD={props.sizeMD}
    order={props.order}
    customClass={props.customClass}
    style={props.style}
    
    />
    );
}

export default ProjectCardCont ;
