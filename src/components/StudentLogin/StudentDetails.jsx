import React from "react";
import './StudentLogin.css';
function Details ({formData,setFormData})
    {
        return(
            <div className="sign-up-container">
               <input type="text" placeholder="Name" value={formData.name} onChange={(event)=> setFormData({...formData,name:event.target.value})}/>
               <input type="text" placeholder="Father's Name" value={formData.fathername} onChange={(event)=> setFormData({...formData,fathername:event.target.value})}/>
               <input type="text" placeholder="Mother's Name" value={formData.mothername}onChange={(event)=> setFormData({...formData,mothername:event.target.value})}/>
               <input type="tel" placeholder="Phone No." value={formData.phoneno} onChange={(event)=> setFormData({...formData,phoneno:event.target.value})}/>
               <input type="tel" placeholder="Whatsapp No." value={formData.whatsapp} onChange={(event)=> setFormData({...formData,whatsapp:event.target.value})}/>
               <input type="email" placeholder="Email" value={formData.email} onChange={(event)=> setFormData({...formData,email:event.target.value})}/>
               <input type="date" placeholder="Date Of Birth" value={formData.date} onChange={(event)=> setFormData({...formData,date:event.target.value})}/>
               <input type="text" placeholder="Address" value={formData.address}/>
            </div>
        )

    }
    export default Details;