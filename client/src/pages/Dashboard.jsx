import { useState, useEffect } from "react";
import { useLocation, Outlet} from "react-router-dom";
import DashSidebar  from './../components/DashSidebar';


const Dashboard = () => {
  const location = useLocation();
  const [tab, setTab] = useState();

  useEffect(()=>{
    const urlParams = new URLSearchParams(location.search);
    const tabFromUrl = urlParams.get('tab');
    if (tabFromUrl) {
      setTab(tabFromUrl);
    }
  }, [location.search]);
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
         <div>
           <DashSidebar activetab={tab}/>
         </div>
         <Outlet />
    </div>
  )
}

export default Dashboard