import React, {Fragment} from 'react';
import Navbar from '../../components/Navbar'
import Hero from '../../components/hero'
import Testimonial from '../../components/Testimonial'
import Attorney from '../../components/attorneys'
import Consultinencey from '../../components/Consultinencey'
import Footer from '../../components/footer'
import Scrollbar from '../../components/scrollbar'
import Logo from '../../images/logo-2.svg'


const HomePage =() => {
    return(
        <Fragment>
            <Navbar hclass={'wpo-header-style-2'} Logo={Logo} topbarNone={'header-without-topbar'}/>
            <Hero heroClass={'wpo-hero-slider-s2'}/>
            <Attorney/>
            <Testimonial/>
            <Consultinencey/>
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default HomePage;