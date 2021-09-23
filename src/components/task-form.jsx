import React, {useState, useContext} from 'react';
import { GlobalContext } from '../context/global-context';

const TaskForm = () => {

    const {addTask} = useContext(GlobalContext);
    

    const [task, setTask] = useState({
        title: '',
        description: '',
    });

    const handleChange = (e) => {
        setTask({...task, [e.target.name]: e.target.value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(task);
        addTask(task);
    }

    return (
        <div className=" flex justify-center items-center h-3/4">
            <form className="bg-gray-900 p-10">
                <h2 className="mb-7 text-3x1">A task</h2>

                <div className="mb-3">
                    <input 
                        type="text" 
                        name="title" 
                        placeholder="Write a title" 
                        onChange={handleChange}
                        className="py-3 px-4 focus:outline-none focus:text-gray-100 bg-gray-700 w-full" />
                </div>

                <div className="mb-3">
                    <textarea 
                        name="Description" 
                        rows="2" 
                        placeholder="Write a description"
                        onChange={handleChange}
                        className="py-3 px-4 focus:outline-none focus:text-gray-100 bg-gray-700 w-full" />
                </div>

                <button className="bg-green-600 w-full hover:bg-green-500 py-2 px-4 mt-5" onClick={handleSubmit}>
                    Create task
                </button>
                
            </form>
        </div>
    )
}

export default TaskForm;
