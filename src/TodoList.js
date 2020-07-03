import React, { Component } from "react";
import { connect } from "react-redux";
class TodoLsit extends Component {
  render() {
    return (
      <div>
        <div>
          <input
            value={this.props.inputValue}
            onChange={this.props.inputChange}
          />
          <button onClick={this.props.addList}>添加</button>
        </div>
        <ul>
          {this.props.list.map((item, index) => {
            return (
              <li
                onClick={this.props.deleteItem.bind(this, index)}
                key={index + item}
              >
                {item}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    inputValue: state.todolist.inputValue,
    list: state.todolist.list,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    inputChange(e) {
      let action = {
        type: "changeInput",
        value: e.target.value,
      };
      dispatch(action);
    },
    addList() {
      let action = {
        type: "addList",
      };
      dispatch(action);
    },
    deleteItem(index) {
      let action = {
        type: "deleteItem",
        value: index,
      };
      dispatch(action);
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoLsit);
