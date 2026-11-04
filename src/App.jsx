import {useState} from "react";
import Student from "./Student";

function App(){
    const[name,setName]=useState("");
    const[course,setCourse]=useState("");
    const[email,setEmail]=useState("");
    const[marks,setMarks]=useState("");

    const[submitted,setSubmitted]=useState(false);
    const[error,setError]=useState("");

    function handleSubmit(e){
        e.preventDefault();

        if(name.trim()===""){
            setError("Please enter name.");
            setSubmitted(false);
        }
        else if(course.trim()===""){
            setError("Please enter course.");
            setSubmitted(false);
        }
        else if(email.trim()===""){
            setError("Please enter email.");
            setSubmitted(false);
        }
        else if(marks.trim()===""){
            setError("Please enter marks.");
            setSubmitted(false);
        }
        else if(Number(marks)<0 || Number(marks)>100){
            setError("Please enter marks between 0 and 100.");
            setSubmitted(false);
        }
        else{
            setError("");
            setSubmitted(true);
        }
    }

    function handleReset(e){
        e.preventDefault();
        setName("");
        setCourse("");
        setEmail("");
        setMarks("");
        setError("");
        setSubmitted(false);
    }

    function handleNameChange(e){
        setName(e.target.value);
    }
    function handleCourseChange(e){
        setCourse(e.target.value);
    }
    function handleEmailChange(e){
        setEmail(e.target.value);
    }
    function handleMarksChange(e){
        setMarks(e.target.value);
    }

    return (
        <div className="container mt-5">
            <h1 className="text-center text-white mb-4 bg-primary rounded-2 ">Student Grade Check</h1>
            <form onSubmit={handleSubmit} className="card p-4 shadow">
                <label className="form-label fw-semibold">Enter Name</label>
                <input className="form-control mb-3" 
                type="text"
                value={name}
                onChange={handleNameChange}
                />
                <label className="form-label fw-semibold">Enter Course</label>
                <input className="form-control mb-3" 
                type="text"
                value={course}
                onChange={handleCourseChange}
                />
                <label className="form-label fw-semibold">Enter Email</label>
                <input className="form-control mb-3" 
                type="email"
                value={email}
                onChange={handleEmailChange}
                />
                <label className="form-label fw-semibold">Enter Marks</label>
                <input className="form-control mb-3" 
                type="number"
                value={marks}
                onChange={handleMarksChange}
                />
                <button type="submit" className="btn btn-primary">Submit</button>
                <button type="button" className="btn btn-secondary mt-3 black" onClick={handleReset}>Reset</button>
            </form>
            {
                error && (
                    <p className="alert alert-danger mt-3 mb-0">{error}</p>
                )
            }
            {
                submitted &&(
                    <Student 
                    name={name}
                    course={course}
                    email={email}
                    marks={Number(marks)}
                    />
                )
            }
        </div>
    );

}
export default App;