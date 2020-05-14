import React, { Component } from "react";

class TodoItems extends Component {

    // grab the props and create an html 
    createTasks = (item) => {
        return (
            // #### how to remove items from the item list #####
            // 1. set up the event handler for dealing with the click event
            <li key={item.key} onClick={() => this.delete(item.key)} >
                {item.text}
            </li>
        )
    }
    // 2. define delete event handler and send the item key
    delete = (key) => {
        this.props.delete(key)
    }

    render() {
        // grab the entire list
        var todoEntries = this.props.entries;
        // apply map operator on each entry of the lists
        var listItems = todoEntries.map(this.createTasks);

        return (
            <ul className="theList">
                {listItems}
            </ul>
        );
    }
};

export default TodoItems;