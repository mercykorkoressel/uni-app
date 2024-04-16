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
        </Routes>
      </BrowserRouter>
      
    </div>
    
  );
}

export default App;
