import { Grid,Container } from '@mui/material';

import ProjectCardCont from '../components/PorjectCard/ProjectCardCont'


const Home = () => {
    return (
    <Container>
        <Grid container spacing={{ xs: 2, md: 3 }} >
        <Grid item xs={12} sm={4} md={4} >
                <Grid container spacing={{ xs: 2, md: 3 }} >
                    <ProjectCardCont 
                    nameOfProject='Project 4'
                    sizeXS={12}
                    sizeSM={12}
                    sizeMD={12}
                    />
                    <ProjectCardCont 
                    nameOfProject='Project 5'
                    sizeXS={12}
                    sizeSM={12}
                    sizeMD={12}
                    />
                </Grid>
            </Grid>
            <ProjectCardCont 
            nameOfProject='PWA'
            sizeXS={12}
            sizeSM={4}
            sizeMD={4}
            />
            <Grid item xs={12} sm={4} md={4} >
                <Grid container spacing={{ xs: 2, md: 3 }} >
                    <ProjectCardCont 
                    nameOfProject='Project 4'
                    sizeXS={12}
                    sizeSM={12}
                    sizeMD={12}
                    />
                    <ProjectCardCont 
                    nameOfProject='Project 5'
                    sizeXS={12}
                    sizeSM={12}
                    sizeMD={12}
                    />
                </Grid>
            </Grid>
        </Grid>
    </Container>
    );
}

export default Home;