import React from "react";
import './StudentLogin.css';
function CollegeDetails ({formData,setFormData})
    {
        return(
            <div className="other-info-container">
               <input type="number" placeholder="NEET Score" value={formData.neet}/>
               <input type="text" placeholder="Preferred College" value={formData.location}/>
            </div>
        )

    };
    export default CollegeDetails;