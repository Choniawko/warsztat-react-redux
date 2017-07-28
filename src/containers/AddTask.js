import React from 'react';
import { connect } from 'react-redux';

class AddTaskContainer extends React.Component {

    handleSubmit = (e) => {}

    render() {
        return (
            <div>
            <form onSubmit={this.handleSubmit}>
                <input  />
                <button type="submit">
                Add Task
                </button>
            </form>
            </div>
        );
    }
} 

AddTaskContainer = connect()(AddTaskContainer)

export default AddTaskContainer