import ResumeComp from './ResumeComp';
import ResumeData from '../../data/resume.json';

interface ExpDataObj{
    title:string;
    company:string;
    time:string;
    location:string;
    Resp:string[]
}
interface ExpDataProps {
    ExpData:ExpDataObj[];
}    

 interface ContactDataObj{
    website:string;
    github:string;
    email:string;
    linkedin:string;
    phone:number;
 }
 
 interface ContactProps {
    ContactInfo:ContactDataObj;
 }

 type Skills = string[];
 
interface SkillsProps {
    Skills:Skills;
} 

interface EducationProps {
    EducationData:EducationObj[];
}

interface EducationObj {
    level:string;
    school:string;
    location:string;
    year:string;
}

interface ResumeCompProps{
    ContactInfo:ContactDataObj;
    Skills:Skills;
    Experience:ExpDataObj[];
    Education:EducationObj[];
 }
 
 
const ResumeCont = () => {

    

    return(
        <ResumeComp
            // ResumeData={ResumeData}
            Skills={ResumeData.Skills}
            ContactInfo={ResumeData.ContactInfo}
            Experience={ResumeData.Experience}
            Education={ResumeData.Education}
        />
    );
    
}
export default ResumeCont;

export type {ResumeCompProps,ExpDataProps,ContactProps,SkillsProps,EducationProps };