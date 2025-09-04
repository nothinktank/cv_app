import { useState } from "react"
//component to add practical experience(company name, position title, main responsibilities, date from and until you worked)
export default function AddPracticalExp() {
    const [pracExperience, setPracExperience] = useState({company:'', position: '', responsibility: '', start: null, end: null})
    const [submitted, setSubmitted] = useState(false)
    return (
        <>
        <h2>Practical Experience</h2>
        <form action="" className="form">
            <label className="info-label" htmlFor="company">Company: </label>
                    {
                        submitted ? (
                            //the behavior where submitted is in true state
                            <span>{pracExperience.company}</span>
                        ): (
                            //the behavior where submitted is in false state
                            <input 
                            className="text-box"
                            type="text" 
                            id="company" 
                            value={pracExperience.company}
                            onChange={(e) => {
                                setPracExperience({
                                    ...pracExperience, 
                                    company: e.target.value
                                })
                            }}
                            placeholder="Company last/currently worked"/>
                        )
                    }
                    <label className="info-label" htmlFor="position">Position: </label>
                    {
                        submitted ? (
                            //the behavior where submitted is in true state
                            <span>{pracExperience.position}</span>
                        ): (
                            //the behavior where submitted is in false state
                            <input 
                            className="text-box"
                            type="text" 
                            id="position" 
                            value={pracExperience.position}
                            onChange={(e) => {
                                setPracExperience({
                                    ...pracExperience, 
                                    position: e.target.value
                                })
                            }}
                            placeholder="Title"/>
                        )
                    }
                    <label className="info-label" htmlFor="responsibility">Responsibility: </label>
                    {
                        submitted ? (
                            //the behavior where submitted is in true state
                            <span>{pracExperience.responsibility}</span>
                        ): (
                            //the behavior where submitted is in false state
                            <textarea 
                            className="text-box"
                            type="text" 
                            id="responsibility" 
                            value={pracExperience.responsibility}
                            onChange={(e) => {
                                setPracExperience({
                                    ...pracExperience, 
                                    responsibility: e.target.value
                                })
                            }}
                            placeholder="Brief job description"/>
                        )
                    }
                    <label className="info-label" htmlFor="period">Start to end of employment: </label>
                    {
                        submitted ? (
                            //the behavior where submitted is in true state
                            <span>From {pracExperience.start} to {pracExperience.end}</span>
                        ): (
                            //the behavior where submitted is in false state
                            <div>
                            <input 
                            className="text-box"
                            type="date" 
                            id="start" 
                            value={pracExperience.start}
                            onChange={(e) => {
                                setPracExperience({
                                    ...pracExperience, 
                                    start: e.target.value
                                })
                            }}
                            />
                            <span> to </span>
                            <input 
                            className="text-box"
                            type="date" 
                            id="end" 
                            value={pracExperience.end}
                            onChange={(e) => {
                                setPracExperience({
                                    ...pracExperience, 
                                    end: e.target.value
                                })
                            }}
                            />
                            </div>
                            
                        )
                    }
                    <button className= 'submit-button-prac' type="button" onClick={() =>{
                if (submitted) {
                    setSubmitted(false);
                } else {

                    setSubmitted(true);
                }
            }}>{submitted ? 'Edit' : 'Submit'}</button>
        </form>
        </>
        
    )
}