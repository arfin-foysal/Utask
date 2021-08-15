import React, { useContext } from 'react'
import { Link, useParams } from 'react-router-dom'
import { DataContext } from '../Context/ContextData'

const ViewUser = () => {
    const {users} = useContext(DataContext)
    const {id}=useParams()
    const user =users.filter(use=>use.id=== Number(id))
       
    return (
      
        <div  className="container ">
            {user.map(user=>
                <div className="card mb-3 shadow mt-5" key={user.id} >
                <div className="row g-0">
                  <div className="col-md-4">
                    <img src={user.imageLink} className="img-fluid rounded-start" alt="..."/>
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h4 className="card-title">Name: {user.name}</h4>
                      < h6> Task: {user.task}</h6>
                      <p>Email: {user.email}</p>
                      <p>Phone: {user.number}</p>
                      <p>Gender: {user.gender}</p>
                      
                    </div>
                  </div>
                </div>
               <div className= "text-center">
               <Link to="/" ><i class=" bi bi-arrow-left-circle-fill"></i></Link>
               </div>

              

              </div>
              
                
                )}
           
        </div>
    )
}

export default ViewUser
