import Projects from '../../data/projects.json';
import ProjectIntroComp from './ProjectIntroComp';

 interface ProjectIntroContProps {
    nameOfProject?:string;
    title?:string;
}


const ProjoctIntroCont = (props:ProjectIntroContProps) =>{
    const Project = Projects.find((project) => project.title.page === props.nameOfProject);
    
    return(
        <ProjectIntroComp
            title={Project?.title.page}
        />
    );

}

export default ProjoctIntroCont;
export type {ProjectIntroContProps};