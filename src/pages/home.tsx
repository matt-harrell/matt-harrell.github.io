import { Grid,Container } from '@mui/material';
import { animated,useChain, useSpringRef, useSpring } from 'react-spring';

import ProjectCardCont from '../components/PorjectCard/ProjectCardCont';





const Home = () => {

    let mobileAnim = undefined;

    const project1AnimRef = useSpringRef();
    const project1Anim = useSpring({
        ref:project1AnimRef,
        from:{opacity:0},
        to:{opacity:1},
        config:{duration:1000}
    })

    const project1AnimResponsive = (window.screen.width > 600) ? project1Anim : mobileAnim;

    const project2AnimRef = useSpringRef();
    const project2Anim = 
    useSpring({
        delay:500,
        ref:project1AnimRef,
        from:{opacity:0},
        to:{opacity:1},
        config:{duration:1000}
    })

useChain([project1AnimRef,project2AnimRef])

    return (
    <Container>
        <Grid container spacing={{ xs: 2, md: 3 }} >
        <Grid item xs={12} sm={3} md={3} order={{xs:2, sm:1}}>
                <Grid container spacing={{ xs: 2, md: 3 }} >
                    <Grid item xs={12}>
                        <animated.div style={project1AnimResponsive}>
                            <ProjectCardCont 
                            nameOfProject='Interactive Animation'
                            sizeXS={12}
                            sizeSM={12}
                            sizeMD={12}
                            customClass='ProductCardSide'
                            />
                        </animated.div>
                    </Grid>
                    <Grid item xs={12}>
                        <animated.div style={project2Anim}>
                            <ProjectCardCont 
                            nameOfProject='Chrome Extension'
                            sizeXS={12}
                            sizeSM={12}
                            sizeMD={12}
                            customClass='ProductCardSide'
                            />
                        </animated.div>
                    </Grid>
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