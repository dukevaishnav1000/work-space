import React from 'react';
import {BrowserRouter,Navigate,Outlet,Route,Routes} from 'react-router-dom';
import AuthPage from '../Components/AuthPage';
import LandingPage from '../Components/LandingPage';
import CandidateOnboarding from '../Components/Candidate/CandidateOnboarding';
import CandidateJobs from '../Components/Candidate/CandidateJobs';
import CandidateProfile from '../Components/Candidate/CandidateProfile';
import CandidateConversation from '../Components/Candidate/CandidateConversation';
import Applications from '../Components/Candidate/Applications';
import EmployerConversation from '../Components/Employer/Conversation';
import EmployerOnboarding from '../Components/Employer/EmployerOnboarding';
import EmployerProfile from '../Components/Employer/Profile';
import Jobs from '../Components/Employer/Jobs';
import Applicants from '../Components/Employer/Applicants';


const CandidateProtectedRoutes=()=>{
if("a"==="b")
return <Navigate to="/"></Navigate>;
else
return <Outlet/>;
}

const EmployerProtectedRoutes=()=>{
    if("a"==="b")
    return <Navigate to="/"></Navigate>;
    else
    return <Outlet/>;
    }

class Navs extends React.Component{

render(){
 
    return(<BrowserRouter>
        <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/auth" element={<AuthPage/>}/>

        <Route element={<CandidateProtectedRoutes/>}>
        <Route path="/candidateOnboarding" element={<CandidateOnboarding/>}/>
        <Route path="/candidate/profile" element={<CandidateProfile/>}/>
        <Route path="/candidate/jobs" element={<CandidateJobs/>}/>
        <Route path="/candidate/application" element={<Applications/>}/>
        <Route path="/candidate/conversation" element={<CandidateConversation/>}/>
        </Route>

        <Route element={<EmployerProtectedRoutes/>}>
        <Route path="/employerOnboarding" element={<EmployerOnboarding/>}/>
        <Route path="/employer/profile" element={<EmployerProfile/>}/>
        <Route path="/employer/jobs" element={<Jobs/>}/>
        <Route path="/employer/conversation" element={<EmployerConversation/>}/>
        <Route path="/employer/applicants" element={<Applicants/>}/>
        </Route>

    </Routes>
    </BrowserRouter>);
}
}


export default Navs;