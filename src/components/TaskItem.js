import React from 'react';

class TaskItem extends React.Component {

    render() {
        const { task } = this.props;
        console.log(task);
        return (
            <li>{task.name}</li>);
    }

}
export default TaskItem;