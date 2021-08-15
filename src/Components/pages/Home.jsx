import React, { useContext } from 'react'
import { Link} from 'react-router-dom'
import { DataContext } from '../Context/ContextData'

const Home = () => {
   
    const {remove} = useContext(DataContext)
    const { users } = useContext(DataContext)
    console.log(users);
    return (
        <div className="container shadow rounded mt-5">
            <table class="table">
                <thead>
                    <tr>
                        <div className="row">
                            <th className="col-2">Name</th>
                            <th className="col-7">Task</th>
                            <th className="col-3">Action</th>
                        </div>
                    </tr>
                </thead>
                {users.map(task =>
                    <tbody key={task.id}>
                     
                        <div className="row" >
                            <tb className="col-2"><b>{task.name}</b></tb>
                            <tb className="col-7">{task.task.slice(0,50)}</tb>
                            <tb className="col-3">
                           <Link to={`viewuser/${task.id}`}> <i class="bi bi-eye-fill"></i></Link>
                            <Link to={`/edittask/${task.id}`}><i  class="bi bi-pencil-square ms-3 me-3" ></i></Link>
                            <i onClick={()=>remove(task.id)} class="bi bi-archive-fill"></i>

                                </tb>
                        </div>
                        <hr />
                    </tbody>
                   
                    
                    )}

            </table>
        </div>
    )
}

export default Home
