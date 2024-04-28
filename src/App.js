import React from 'react';
import LecturerLogin from './pages/lec-login';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Homepage from './pages/homepage';
import LecturerSignup from './pages/lec-signup';
import StudentDash from './pages/studash';
import StudentLogin from './pages/stu-login';
import LecturerDash from './pages/lecdash';
import StudentSignup from './pages/stu-signup';
import LecHome from './pages/lec-home';
import AnnouceForm from './components/annouce-form';
import AssignForm from './components/assign-form';
import GradeForm from './components/grade-form';
import Disciplinary from './components/disciplinary';
import GradeBook from './components/gradebook';
import MessageForm from './components/message-form';
import Barchat from './components/barchat';
import Piechat from './components/piechart';
import ScheduleForm from './components/schedule';
import AllAssignment from './components/all-assignment';
import ViewSchedule from './components/view-schedule';

function App() {
  return (

    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/lechome' element={<LecHome/>} />
          <Route path='/leclogin' element={<LecturerLogin />} />
          <Route path='/lecsignup' element={<LecturerSignup />} />
          <Route path='/stulogin' element={<StudentLogin/>} />
          <Route path='/stusignup' element={<StudentSignup/>} />
          <Route path='/studash' element={<StudentDash/>} />
          <Route path='/lecdash' element={<LecturerDash/>} />
          <Route path='/addgrade' element={<GradeForm/>} />
          <Route path='/adddisc' element={<Disciplinary/>} />
          <Route path='/addassign' element={<AssignForm/>} />
          <Route path='/addmessage' element={<MessageForm/>} />
          <Route path='/gradebook' element={<GradeBook/>} />
          <Route path='/addannouce' element={ <AnnouceForm/>} />
          <Route path='/barchat' element={  <Barchat/>} />
          <Route path='/piechat' element={  <Piechat/>} />
          <Route path='/schedule' element={  <ScheduleForm/>} />
          <Route path='/allassign' element={  <AllAssignment/>} />
          <Route path='/viewschedule' element={  <ViewSchedule/>}/>

        </Routes>
      </BrowserRouter>
      
   
    </div>
    
  );
}

export default App;
