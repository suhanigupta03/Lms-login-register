import React, { useState } from "react";
import StudentDetails from './StudentDetails';
import Studentcollegedetails from './StudentcollegeDetails';
import './StudentLogin.css';
 const Student = () =>{
    const [page,setPage] = useState(0);
    const [formData, setFormData] = useState({
        name:"",
        fathername:"",
        mothername:"",
        phoneno:"",
        whatsapp:"",
        email:"",
        date:"",
        address:"",
        neet:"",
        location:"",

    });
    const FormTitles = ["Student Details","Academic Details"];
    const PageDisplay = ()=>{
       
            if(page === 0)
                {
                    return <StudentDetails formData={formData} setFormData={setFormData}/>;
                }
                else if(page === 1)
                    {
                        return <Studentcollegedetails />;
                    }
        
    };

    return (
      <div className="form">
        <div className="progressbar">
            <div style={{width: page=== 0 ? "50%" : "100%"}}></div>
        </div>
        <div className="form-container">
            <div className="header"> 
            <h1>{FormTitles[page]}</h1>
            </div>
                <div className="body">{PageDisplay()}</div>
                    <div className="footer "> 
                    <button disabled={page == 0}
                    onClick={() => {setPage((currPage) => currPage-1)}}>Prev</button>
                    <button disabled={page == FormTitles.length-1}
                    onClick={() => {setPage((currPage) => currPage+1)}}>Next</button>
                     </div>

        </div>
        
      </div>
    )

 };
  export default Student;