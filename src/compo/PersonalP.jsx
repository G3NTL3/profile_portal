import React from 'react'
import './PersonalP.css'
import studentImg from "./img/21coa2bca2021.jpg";

//array convert kr lena isko
const StudentName = 'Bandar';
const Course = 'BCA';
const StudentEnrollmentNo = '21COA2BCA';
const StudentEmail = "Itzyoyomayankdj@gmail.com"
const StudentScholarNumber = 24578
const StudentSession = '2021 - 2024'
const StudentDateOfBirth = '29 Feb 2006'
const StudentPhoneNumber = '0001325746'



export const PersonalP = () => {
  return (
      <div className='PersonalContainer' >
        <h2 className='PeronalDetailsHead'>Student Profile</h2>
        <div className="studentImage">
          <img src={studentImg} alt="Student" /></div>
        <div className="studentname">{StudentName}</div>
        <div className="Course">{Course}</div>
        <div className="card">
          <div>Enrollment No.</div>
          <div className="enrollmentNumber">{StudentEnrollmentNo}</div>
        </div>
        <div className="card" >
          <div>Scholar No.</div>
          <div className="StudentScholarNumber">{StudentScholarNumber}</div>
        </div>
        <div className="card">
          <div>Session</div>
          <div className="StudentSession">{StudentSession}</div>
        </div>
        <div className="card">
          <div>Date Of Birth</div>
          <div className="StudentDOB">{StudentDateOfBirth}</div>
        </div>
        <div className="card">
          <div>Email</div>
          <div className="StudentEmail">{StudentEmail}</div>
        </div>
        <div className="card">
          <div>Phone No.</div>
          <div className="StudentPhone">{StudentPhoneNumber}</div>
        </div>
      </div>
  )
}
