import React from 'react';
import DashSidebar from '../../components/Dashboard/DashSidebar';
import AllBlogs from '../../components/Dashboard/UserComps/AllUsers';
import Navbar from '../../components/Shared/Navbar/Navbar';

const allblogs = () => {
  return (
    <div>
      <Navbar />
      <div className="grid  lg:md:grid-cols-[300px_minmax(900px,_1fr)]">
        <DashSidebar />
        <AllBlogs/>
      </div>
    </div>
  );
};

export default allblogs;
