import React from 'react';
import DashSidebar from '../../components/Dashboard/DashSidebar';
import MyCourses from '../../components/MyProfile/MyCourses';
import MyProfile from '../../components/MyProfile/MyProfile';
import Footer from '../../components/Shared/Footer/Footer';
import Navbar from '../../components/Shared/Navbar/Navbar';

const myprofile = () => {
    return (
      <div>
        <Navbar></Navbar>
        <div className='grid  lg:md:grid-cols-[300px_minmax(900px,_1fr)]'>
                <DashSidebar />
                <MyProfile/>
            </div>
        {/* <Footer></Footer> */}
      
      </div>
    );
};

export default myprofile;