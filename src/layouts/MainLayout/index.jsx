import { Outlet } from 'react-router-dom';
import { motion } from 'framer-motion';
import Sidebar from '../Sidebar';


function MainLayout() {
  return (
    <div className="grid md:grid-cols-12 min-h-screen h-full ">
      <nav className="md:col-span-2 border-r border-gray-100">
        <Sidebar />
      </nav>
      <div className="col-span-10 w-full">
        <header className="bg-[#fff] fixed p-6 w-full top-0 z-50 h-[70px] shadow-header">
          <div className='flex justify-start items-center md:pl-8'>
            <p className='text-[20px] font-semibold'>Dashboard</p>
          </div>
        </header>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ease: 'easeIn', duration: 0.8 }}
          className="bg-white px-8 md:p-5 mt-0 md:mt-4 md:pl-12 "
        >
          <Outlet />
        </motion.div>
      </div>
    </div>
  );
}

export default MainLayout;
