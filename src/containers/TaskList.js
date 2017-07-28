import React from 'react';
import TaskItem from '../components/TaskItem';

class TaskListContainer extends React.Component {
    
    render() {
        const tasks = [];
        return (
            <ul>
                {tasks.map((task) => {
                    return (
                        <TaskItem 
                            key={task.id} 
                            task={task} 
                        /> 
                    );
                    })}
            </ul>
        );
    }
}

export default TaskListContainer;
