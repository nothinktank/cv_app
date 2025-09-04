import { useState } from "react"

//component to add educational experience(school name, title of study and date of study)
export default function AddEduExperience() {
    const [eduExperience, setEduExperience] = useState({school:'', major: '', date: null})
    const [submitted, setSubmitted] = useState(false)
    return (
        <>
        <h2>Educational Experience</h2>
        <form action="" className="form">
            <label className="info-label" htmlFor="school">College: </label>
                {
                    submitted ? (
                        //the behavior where submitted is in true state
                        <span>{eduExperience.school}</span>
                    ): (
                        //the behavior where submitted is in false state
                        <input 
                        className="text-box"
                        type="text" 
                        id="school" 
                        value={eduExperience.school}
                        onChange={(e) => {
                            setEduExperience({
                                ...eduExperience, 
                                school: e.target.value
                            })
                        }}
                        placeholder="last school attended"/>
                    )
                }
                <label className="info-label" htmlFor="major">Major/Minor: </label>
                {
                    submitted ? (
                        //the behavior where submitted is in true state
                        <span>{eduExperience.major}</span>
                    ): (
                        //the behavior where submitted is in false state
                        <input 
                        className="text-box"
                        type="text" 
                        id="major" 
                        value={eduExperience.major}
                        onChange={(e) => {
                            setEduExperience({
                                ...eduExperience, 
                                major: e.target.value
                            })
                        }}
                        placeholder="Major and/or minor"/>
                    )
                }
                <label className="info-label" htmlFor="date">Date Graduated: </label>
                {
                    submitted ? (
                        //the behavior where submitted is in true state
                        <span>{eduExperience.date}</span>
                    ): (
                        //the behavior where submitted is in false state
                        <input 
                        className="text-box"
                        type="date" 
                        id="date" 
                        value={eduExperience.date}
                        onChange={(e) => {
                            setEduExperience({
                                ...eduExperience, 
                                date: e.target.value
                            })
                        }}
                        />
                    )
                }
                <button className= 'submit-button-edu' type="button" onClick={() =>{
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