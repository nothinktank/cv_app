import { use, useState } from "react"

//component to add general info like name, email and phone number
export default function AddGenInfo({onAddName}) {
    const [generalInfo, setGeneralInfo] = useState({name: '', email: '', phone: ''})
    const [submitted, setSubmitted] = useState(false)

    function handleDisplayName() {
        if (submitted) {
            return generalInfo.name
        }
    }

    return (
        <>
        <h2>General Info</h2>
        <form action=""  className="form">
            <label className="info-label" htmlFor="name">Name: </label>
            {
                submitted ? (
                    //the behavior where submitted is in true state
                    <span>{generalInfo.name}</span>
                ): (
                    //the behavior where submitted is in false state
                    <input 
                    className="text-box"
                    type="text" 
                    id="name" 
                    value={generalInfo.name}
                    onChange={(e) => {
                        setGeneralInfo({
                            ...generalInfo, 
                            name: e.target.value
                        })
                    }}
                    placeholder="First and last"/>
                )
            }
            {/* <br /> */}
                
            <label className="info-label" htmlFor="email">Email: </label>
            {submitted ? (
                    //the behavior where submitted is in true state
                    <span>{generalInfo.email}</span>
            ):(
                    //the behavior where submitted is in false state
                    <input 
                    className="text-box"
                    type="email" 
                    id="email"
                    value={generalInfo.email} 
                    onChange={(e) => {
                        setGeneralInfo({
                            ...generalInfo, 
                            email: e.target.value
                        })
                    }}
                    placeholder="@email.com"/>
            )}
                {/* <br /> */}
            <label className="info-label" htmlFor="phone">Phone: </label>
            {submitted ? (
                    //the behavior where submitted is in true state
                    <span>{generalInfo.phone}</span>
            ):(
                    //the behavior where submitted is in false state
                    <input 
                    className="text-box"
                    type="text" 
                    id="phone" 
                    value={generalInfo.phone}
                    onChange={(e) => {
                        setGeneralInfo({
                            ...generalInfo, 
                            phone: e.target.value
                        })
                    }}
                    placeholder="Phone Number"/>
            ) }
                {/* <br /> */}
            
                <button className= 'submit-button-gen' type="button" onClick={() =>{
                if (submitted) {
                    setSubmitted(false);
                } else {

                    setSubmitted(true);
                }
            }}>{submitted ? 'Edit' : 'Submit'}</button>
            
            
            
        </form>
        
            {/* <h3>Name:
                <input 
                    type="text" 
                    placeholder="Your name"
                    onChange={e => setName(e.target.value)}
                    value={name}
                
                /> <button 
                onClick={() => {
                    //clear the input text box
                    setName('')
                    onAddName(name)
                }}
                >Submit</button></h3> 
        */}
        
       
        </>
        
    )
}