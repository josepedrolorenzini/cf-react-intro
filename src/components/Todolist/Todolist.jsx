import React , {useEffect, useState} from 'react'
import "../../index.css"

function Todolist() {
    const [task , setTasks] = useState([]) ;
    const [newTask, setNewTask] = useState('');

    let handleSubmit = (e) => {
            e.preventDefault();
            // setTask((prevTasks => [...prevTasks, document.forms[0][0].value ]))
            // console.log(e) ;
                // Add new task to the list using prevTasks
            setTasks((prevTasks) => [...prevTasks, newTask]);

            // Clear input field
            setNewTask('');

            // Optionally, log form data or task
            console.log(newTask);

           
    }

    const handleInputChange = (e) => {
        setNewTask(e.target.value);
      };

    useEffect(() => {
        return (
            console.log(task) 
        )
    },[]) ;

  return (
    <>
    <div>
        <h1>Todolist</h1>

        <form>
            <input 
             value={newTask}
             onChange={handleInputChange}
             placeholder="Enter a new task"
            />
            <button type="submit" onClick={handleSubmit}>Add</button>
        </form>
         <ul>
            {task.map((task, index) => (
                <li key={index} className='listaLi'>{task}</li>
            ))}
        </ul>
    </div>
    </>
  )
}

export default Todolist