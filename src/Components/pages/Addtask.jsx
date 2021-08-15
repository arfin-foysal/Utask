import React, { useContext, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { DataContext } from '../Context/ContextData'

const Addtask = () => {
    const {adduser} = useContext(DataContext)
   const history= useHistory()

    const [task, settask] = useState("")
    const [name, setname] = useState("")
    const [email, setemail] = useState("")
    const [number, setnumber] = useState("")
    const [imageLink, setImageLink] = useState("")
    const [gender, setGender] = useState("")

    const submitValue=(e)=>{
        e.preventDefault()
        
          adduser({
            id:Math.random(),
            task,
            name,
            email,
            number,
            imageLink,
            gender
          })
          history.push("/")
        }



    return (
        <div className="container shadow rounded">
            <h2 className="text-center mt-2">Add Youre Informetion</h2>
        <hr />
            <form onSubmit={submitValue}>
                <div class="mb-3 ">

                    <input type="text" value={task} onChange={(e) => settask(e.target.value)} class="form-control" id="formGroupExampleInput" placeholder="Task" />
                </div>
                <div class="mb-3 ">

                    <input type="text" value={name}onChange={(e) => setname(e.target.value)}   class="form-control" id="formGroupExampleInput" placeholder="Name" />
                </div>
                <div class="mb-3 ">

                    <input type="email" value={email} onChange={(e) => setemail(e.target.value)}  class="form-control" id="formGroupExampleInput" placeholder="Email" />
                </div>
                <div class="mb-3 ">

                    <input type="number" value={number} onChange={(e) => setnumber(e.target.value)}    class="form-control" id="formGroupExampleInput" placeholder="Number" />
                </div>
                <div class="mb-3 ">

                    <input type="text" value={imageLink} onChange={(e) => setImageLink(e.target.value)} class="form-control" id="formGroupExampleInput" placeholder="Image Link" />
                </div>
                <div class="mb-3 text-center ">

                    <select class="form-select" value={gender} onChange={(e) => setGender(e.target.value)}  aria-label="Default select example">
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

export default Addtask
