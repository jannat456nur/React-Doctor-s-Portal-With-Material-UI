import React from 'react';
import Calender from '../../../shared/Calender/Calender';
import Navigation from '../../../shared/Navigation/Navigation';
import AppointmentBanner from '../../Appointment/AppointmentBanner/AppointmentBanner';
import Banner from '../../Banner/Banner';
import Services from '../Services/Services';


const Home = () => {

    return (
        <div>

            <Navigation></Navigation>
            <Banner></Banner>
            <Services></Services>
            <Calender></Calender>
            <AppointmentBanner></AppointmentBanner>



        </div>
    );
};

export default Home;