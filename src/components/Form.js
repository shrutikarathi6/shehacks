import React, { useState } from "react";
import Navbar from "./Navbar";

const Form = () => {
    const [userHelp, setUserHelp] = useState({
        name: "",
        method: "",
        contactNumber: "",
        address: "",
        current: "",
        safety: "",
        child: "",
        history: "",
        message: "",
        health: "",
        contact1: "",
        contact2: "",
        assistance1: "",
        assistance2: "",
        confi1: "",
        confi2: ""
    });

    const[records, setRecords] = useState([]);

    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setUserHelp({... userHelp, [name] : value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const newRecord = {...userHelp , id : new Date().getTime.toString()}
        console.log(records);
        setRecords([...records , newRecord]);
        console.log(records);

    }
    return(
        <>
             <Navbar />

             <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" id="name" autoComplete="off" value={userHelp.name}
                    onChange={handleInput}/>
                </div>

                <div>
                    <label htmlFor="method">How should we contact you?</label>
                    <input type="text" name="method" id="method" autoComplete="off" value={userHelp.method}
                    onChange={handleInput}/>
                </div>

                <div>
                    <label htmlFor="contactNumber">Contact Number</label>
                    <input type="text" name="contactNumber" id="contactNumber" autoComplete="off" value={userHelp.contactNumber}
                    onChange={handleInput}/>
                </div>

                <div>
                    <label htmlFor="address">Address</label>
                    <input type="text" name="address" id="address" autoComplete="off" value={userHelp.address}
                    onChange={handleInput}/>
                </div>

                <div>
                    <label htmlFor="current">Current Situation</label>
                    <input type="text" name="current" id="current" autoComplete="off" value={userHelp.current}
                    onChange={handleInput}/>
                </div>

                <div>
                    <label htmlFor="safety">Safety Concerns</label>
                    <input type="text" name="safety" id="safety" autoComplete="off" value={userHelp.safety}
                    onChange={handleInput}/>
                </div>

                <div>
                    <label htmlFor="child">Children or dependencies</label>
                    <input type="number" name="child" id="child" autoComplete="off" value={userHelp.child}
                    onChange={handleInput}/>
                </div>

                <div>
                    <label htmlFor="history">History of abuse</label>
                    <input type="text" name="history" id="history" autoComplete="off" value={userHelp.history}
                    onChange={handleInput}/>
                </div>

                <div>
                    <label htmlFor="message">Your message for the team</label>
                    <input type="text" name="message" id="message" autoComplete="off" value={userHelp.message}
                    onChange={handleInput}/>
                </div>

                <div>
                    <label htmlFor="health">Describe physical and emotional health</label>
                    <input type="text" name="health" id="health" autoComplete="off" value={userHelp.health}
                    onChange={handleInput}/>
                </div>

                <div>
                    <label htmlFor="con">Have you contacted us before?</label>
                    <label> 
                    <input type="checkbox" name="contact1" id="contact1" autoComplete="off" value={userHelp.contact1}
                    onChange={handleInput}/>
                    Yes
                    </label>

                    <label> 
                    <input type="checkbox" name="contact2" id="contact2" autoComplete="off" value={userHelp.contact2}
                    onChange={handleInput}/>
                    No
                    </label>
                    
                </div>

                <div>
                    <label htmlFor="legalhelp">Want legal assistance?</label>
                    <label> 
                    <input type="checkbox" name="assistance1" id="assistance1" autoComplete="off" value={userHelp.assistance1}
                    onChange={handleInput}/>
                    Yes
                    </label>

                    <label> 
                    <input type="checkbox" name="assistance2" id="assistance2" autoComplete="off" value={userHelp.assistance2}
                    onChange={handleInput}/>
                    No
                    </label>
                    
                </div>

                <div>
                    <label htmlFor="legalhelp">Want confidential counselling services?</label>
                    <label> 
                    <input type="checkbox" name="confi1" id="confi1" autoComplete="off" value={userHelp.confi1}
                    onChange={handleInput}/>
                    Yes
                    </label>

                    <label> 
                    <input type="checkbox" name="confi2" id="confi2" autoComplete="off" value={userHelp.confi2}
                    onChange={handleInput}/>
                    No
                    </label>
                    
                </div>
                <button type="submit">Submit</button>
             </form>
            
        </>
       

    )
}
export default Form