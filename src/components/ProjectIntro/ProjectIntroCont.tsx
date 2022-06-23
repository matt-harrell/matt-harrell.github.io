import { Typography,List,ListItem, Box} from '@mui/material';
import Projects from '../../data/projects.json';
import ProjectIntroComp from './ProjectIntroComp';

interface links {
    link:string;
    text:string;
}


 interface ProjectIntroContProps {
    nameOfProject?:string;
    title?:string;
    skills?:string[] | undefined;
    image?:string;
    imagePath?:string;
    Desc?:string;
    linksElement?: JSX.Element;
}


const ProjoctIntroCont = (props:ProjectIntroContProps) =>{
    const Project = Projects.find((project) => project.title.page === props.nameOfProject);

    let websiteLinks;
    if (Project?.projectLinks !== undefined){
        const ProjectLinks = Project?.projectLinks;
       websiteLinks = ProjectLinks.map((Projectlink,index) =>

       <ListItem key={index}><a href={Projectlink.link}>{Projectlink.text}</a></ListItem>

       )
       
       
    }

    let linksElement;
    if (websiteLinks !== undefined){
        linksElement =
        <Box> 
            <Typography variant='h4' component='h2'>Project Links</Typography>
                <List>
                    {websiteLinks}
                </List>
        </Box>
    }
    
    return(
        <ProjectIntroComp
            title={Project?.title.page}
            skills={Project?.skills}
            image={Project?.images.main}
            imagePath={Project?.title.thumbnail.replaceAll(' ', '-').toLowerCase()}
            Desc={Project?.description}
            linksElement={linksElement}
            
        />
    );

}

export default ProjoctIntroCont;
export type {ProjectIntroContProps, links};