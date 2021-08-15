import React, { useContext, useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { DataContext } from '../Context/ContextData'

const Edittask = () => {
    const{id}=useParams()
    const {users,edituser} = useContext(DataContext)
   const history= useHistory()

    const [edittask, setedittask] = useState({
            id:null,
            task:"",
            name:"",
            email:"",
            number:"",
            imageLink:"",
            gender:"",
    });
    
    useEffect(() => {
       
        const edittask=users.find(tsk=>tsk.id === Number(id));
        setedittask(edittask)
    }, [])

    const submitValue=(e)=>{
        e.preventDefault()
          
        edituser(edittask)
          history.push("/")
        }

        const handleOnChange = (userKey, nawval) =>
        setedittask ({ ...edittask, [userKey]: nawval });

    return (
        <div className="container shadow rounded">
            <h2 className="text-center mt-2">Edit Youre Informetion</h2>
        <hr />
            <form onSubmit={submitValue}>
                <div class="mb-3 ">

                    <input type="text" value={edittask.task} onChange={(e) => handleOnChange("task",e.target.value)} class="form-control" id="formGroupExampleInput" placeholder="Task" />
                </div>
                <div class="mb-3 ">

                    <input type="text" value={edittask.name}onChange={(e) => handleOnChange("name",e.target.value)}   class="form-control" id="formGroupExampleInput" placeholder="Name" />
                </div>
                <div class="mb-3 ">

                    <input type="email" value={edittask.email} onChange={(e) => handleOnChange("email",e.target.value)}  class="form-control" id="formGroupExampleInput" placeholder="Email" />
                    
                  
                </div>
                <div class="mb-3 ">

                <input type="number" value={edittask.number} onChange={(e) => handleOnChange("number",e.target.value)}    class="form-control" id="formGroupExampleInput" placeholder="Number" />
                    
                  
                </div>
                <div class="mb-3 ">

                    <input type="text" value={edittask.imageLink} onChange={(e) => handleOnChange("imageLink",e.target.value)} class="form-control" id="formGroupExampleInput" placeholder="Image Link" />
                </div>
                <div class="mb-3 text-center ">

                    <select class="form-select" value={edittask.gender} onChange={(e) => handleOnChange("gender",e.target.value)}  aria-label="Default select example">
                        <option selected>Gender</option>
                        <option value="1">Male</option>
                        <option value="2">Female</option>
                    </select>
                    <button type="submit" className="btn btn-successmt-3 "><i class="bi bi-arrow-right-circle-fill"></i></button>
                </div>
            </form>
        </div>
    )
}

export default Edittask
