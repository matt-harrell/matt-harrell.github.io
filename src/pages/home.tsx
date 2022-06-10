import { Grid,Container } from '@mui/material';

import ProjectCardCont from '../components/PorjectCard/ProjectCardCont'


const Home = () => {
    return (
    <Container>
        <Grid container spacing={{ xs: 2, md: 3 }} >
        <Grid item xs={12} sm={3} md={3} order={{xs:2, sm:1}}>
                <Grid container spacing={{ xs: 2, md: 3 }} >
                    <ProjectCardCont 
                    nameOfProject='Interactive Animation'
                    sizeXS={12}
                    sizeSM={12}
                    sizeMD={12}
                    customClass='ProductCardSide'
                    />
                    <ProjectCardCont 
                    nameOfProject='Chrome Extension'
                    sizeXS={12}
                    sizeSM={12}
                    sizeMD={12}
                    customClass='ProductCardSide'
                    />
                </Grid>
        </Grid>
                <ProjectCardCont 
                nameOfProject='PWA'
                sizeXS={12}
                sizeSM={6}
                sizeMD={6}
                order={{xs:1, sm:2}}
                />
        <Grid item xs={12} sm={3} md={3} order={{xs:2, sm:3}}>
            <Grid container spacing={{ xs: 2, md: 3 }} >
                <ProjectCardCont 
                nameOfProject='WordPress'
                sizeXS={12}
                sizeSM={12}
                sizeMD={12}
                customClass='ProductCardSide'
                />
                <ProjectCardCont 
                nameOfProject='MTG API'
                sizeXS={12}
                sizeSM={12}
                sizeMD={12}
                customClass='ProductCardSide'
                />
            </Grid>
        </Grid>
        </Grid>
    </Container>
    );
}

export default Home;