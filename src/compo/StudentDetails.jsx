import React from 'react'
import './SD.css'

const StudentInfo = () => {
    return (
        // <div className="parentDiv">
            <div className="StuDetails">
                <form action="">
                    <div className='Dcard'>
                        <label htmlFor="Name">Name:</label>
                        <input type="text" value='Bandar Joshi' />
                    </div>
                    <div className='Dcard'>
                        <label htmlFor="Enrollment">Enrollment:</label>
                        <input type="text" value='21COAABCA' />
                    </div>
                    <div className='Dcard'>
                        <label htmlFor="Program">Program:</label>
                        <input type="text" value='BCA III Sem' />
                    </div>
                    <div className='Dcard'>
                        <label htmlFor="DOB">Date Of Birth:</label>
                        <input type="date" value="2020-04-07" />
                    </div>
                    <div className='Dcard'>
                        <label htmlFor="PlaceOB">Place Of Birth</label>
                        <input type="text" value='by mistake, dewas' />
                    </div>
                    <div className='Dcard'>
                        <label htmlFor="Nationality">Nationality</label>
                        <select name="nationality" id="Nationality">
                            <option value="Indian">Indian</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>
                    <div className='Dcard'>
                        <label htmlFor="Religion">Religion</label>
                        <select name="Religion" id="Religion">
                            <option value="HINDU">HINDU</option>
                            <option value="OBC">MUSLIM</option>
                            <option value="CHRISTIAN">CHRISTIAN</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>
                    <div className='Dcard'>
                        <label htmlFor="Gender">Gender</label>
                        <select name="Gender" id="Gender">
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="null" selected>--Select--</option>
                        </select>
                    </div>
                    <div className='Dcard'>
                        <label htmlFor="Aadhar No">Aadhar No.:</label>
                        <input type="text" value='6517 7817 5257' />
                    </div>
                    <div className='Dcard'>
                        <label htmlFor="Catagory">Catagory</label>
                        <select name="Catagory" id="Catagory">
                            <option value="GEN">GEN</option>
                            <option value="OBC">OBC</option>
                            <option value="SC">SC</option>
                            <option value="ST">ST</option>
                        </select>
                    </div>
                </form>
            </div>
        // </div>
    )
}

export const MainPage = () => {
    return (
        <div className="maincont">
            <div className="DetailsHead"><h1>Personal Details</h1></div>
            <div className="sInfo">
                <h3>Student</h3>
                <hr />
                <StudentInfo />
            </div>
            <div className="FatherInfo">
                <h3>Father's Info</h3>
            </div>
        </div>
    )
}
