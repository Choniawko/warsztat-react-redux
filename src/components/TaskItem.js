import React from 'react';

class TaskItem extends React.Component {

    render() {
        const { task } = this.props;
        return (
            <div>{task.name}</div>);
    }

}
export default TaskItem;