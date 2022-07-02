import { Grid,Container } from '@mui/material';
import { useChain, useSpringRef, useSpring } from 'react-spring';

import { useEffect } from 'react';

import ProjectCardCont from '../components/PorjectCard/ProjectCardCont';
import ContactFormCont from '../components/ContactForm/ContactFormCont';





const Home = () => {

    useEffect(() =>{
        document.title = "Matt's Portfolio";
    })

    let mobileAnim = undefined;

    const fadeInLeftRef = useSpringRef();
    const fadeInLeft = useSpring({
        ref:fadeInLeftRef,
        from:{opacity:0,x:-250},
        to:{opacity:1,x:0},
        config:{duration:400}
    })

    const fadeInLeftResponsive = (window.screen.width > 600) ? fadeInLeft : mobileAnim;

    const fadeInRightRef = useSpringRef();
    const fadeInRight = 
    useSpring({
        ref:fadeInRightRef,
        from:{opacity:0,x:250},
        to:{opacity:1,x:0},
        config:{duration:400}
    })

    const fadeInRightResponsive = (window.screen.width > 600) ? fadeInRight : mobileAnim;

    const fadeDownRef = useSpringRef();
    const fadeDown = useSpring({
        ref:fadeDownRef,
        from:{opacity:0,y:-250},
        to:{opacity:1,y:0},
        config:{duration:400}
    })

    const fadeDownResponsive = (window.screen.width > 600) ? fadeDown : mobileAnim;

    useChain([fadeInLeftRef,fadeInRightRef,fadeDownRef],[0,.2,.4])

    return (
    <Container>
        <Grid container spacing={{ xs: 1, md: 2, lg: 3 }} >
        <Grid item xs={12} sm={3} md={3} order={{xs:2, sm:1}}>
                <Grid container spacing={{ xs: 2, md: 3 }} >
                    <Grid item xs={12}>
                        <ProjectCardCont 
                        nameOfProject='Interactive Animation'
                        sizeXS={12}
                        sizeSM={12}
                        sizeMD={12}
                        customClass='ProjectCardSide'
                        style={fadeInLeftResponsive}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <ProjectCardCont 
                        nameOfProject='Chrome Extension'
                        sizeXS={12}
                        sizeSM={12}
                        sizeMD={12}
                        customClass='ProjectCardSide'
                        style={fadeInLeftResponsive}
                        />
                    </Grid>
                </Grid>
        </Grid>
                <ProjectCardCont 
                nameOfProject='PWA'
                sizeXS={12}
                sizeSM={6}
                sizeMD={6}
                order={{xs:1, sm:2}}
                customClass='ProjectCardMain'
                style={fadeDownResponsive}
                />
        <Grid item xs={12} sm={3} md={3} order={{xs:2, sm:3}}>
            <Grid container spacing={{ xs: 2, md: 3 }} >
                <ProjectCardCont 
                nameOfProject='WordPress'
                sizeXS={12}
                sizeSM={12}
                sizeMD={12}
                customClass='ProjectCardSide'
                style={fadeInRightResponsive}
                />
                <ProjectCardCont 
                nameOfProject='MTG API'
                sizeXS={12}
                sizeSM={12}
                sizeMD={12}
                customClass='ProjectCardSide'
                style={fadeInRightResponsive}
                />
            </Grid>
        </Grid>
        </Grid>
        <ContactFormCont/>
    </Container>
    );
}

export default Home;