import React, {useContext} from 'react';
import { GlobalContext } from '../context/global-context';


const TaskList = () => {

    const {tasks, deleteTask} = useContext(GlobalContext);
    //console.log(task);

    return (
        <div className="flex justify-center">

            <button onClick={ () => deleteTask()}>
                Delete all
            </button>
            
            <div className="w-6/12">
                {tasks?.map((resp) => ( 
                    <div className="bg-gray-900 px-20 py-5 text-white shadow-2x1 mb-4 flex justify-between" key={resp?.id}>
                    <div>
                        <h1> {resp?.title} </h1>
                        <h6>{resp?.id}</h6>
                    </div>
                    <div>
                        <button>
                            Edit
                        </button>
                        <button>
                            Delete
                        </button>
                    </div>
                    </div>
                    
                ))}
            </div>
           
        </div>
    )
}

export default TaskList;
