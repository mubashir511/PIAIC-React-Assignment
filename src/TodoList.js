import React, { Component } from "react";
import TodoItems from "./TodoItems";
import "./TodoList.css";

class TodoList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            items: []
        }

    }
    addItem = (event) => {
        if (this._inputElement.value !== "") {
            // create a variable called newItem that will store an object
            var newItem = {
                text: this._inputElement.value,
                // unique key
                key: Date.now()
            };

            // we are ensuring our state object isn't modified. We are instead giving it an entirely new array 
            // made up of both the existing items data along with the newly entered data.
            this.setState((prevState) => {
                return {
                    items: prevState.items.concat(newItem)
                };
            });
            // console.log(this.state.items.concat(newItem))
            // console.log(newItem)
            // console.log(this.state.items)


            this._inputElement.value = "";
        }

        // console.log(this._inputElement.value)
        event.preventDefault()
    }

    // We are passing the key from our clicked item all the way here, and we check this key against all of the items we are storing currently via the filter method
    deleteItem = (key) => {
        // The result of this code running is simple. We create a new array called filteredItems that contains everything except the item we are removing. This filtered array is then set as our new items property on our state object:
        var filteredItems = this.state.items.filter(function (item) {
            return (item.key !== key);
        });

        this.setState({
            items: filteredItems
        });
    }

    render() {
        return (
            <div className="todoListMain">
                <p className='primaryHeading'>TODO APP</p>
                <div className="header">
                    <form onSubmit={this.addItem}>
                        {/* storing a reference to our input element in the appropriately named _inputElement property */}
                        <input placeholder="enter task" ref={(a) => this._inputElement = a}></input>
                        <button type="submit">add</button>
                    </form>
                </div>
                {/* send item list to Todoitems component as props */}
                <TodoItems entries={this.state.items} delete={this.deleteItem} />
            </div>
        );
    }
}

export default TodoList;