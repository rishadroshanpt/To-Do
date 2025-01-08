import axios from "axios";
import { useState } from "react";

function Add(){
    const [task,setTask] = useState('')
    const [discription,setDiscription] = useState('')

    const handleSubmit = (e)=>{
        e.preventDefault()
        axios.post('http://127.0.0.1:8000/api/todo/',{task,discription}).then((res)=>{
            setTask('')
            setDiscription('')
        }).catch(error=>console.log(error.message))
    }
    return(
        <form onSubmit={handleSubmit} >
            <input type="text" name="task" id="task" value={task} onChange={(e)=>setTask(e.target.value)}/>
            <input type="text" name="discription" id="discription" value={discription} onChange={(e)=>setDiscription(e.target.value)} />
            <input type="submit" value='Add' className="btn btn-primary" />
        </form>

    )
}

export default Add