import React, { Component } from "react";
import {Link} from 'react-router-dom'
class Agency extends Component {
  state = {};
  render() {
    return (
    <div>
        代理商首页
        <Link to='/user/security/aegncy/edit/6'>编辑</Link>
        <button onClick={this.edit.bind(this,10)}>编辑</button>
    </div>
    );
  }
  edit(index){
      const url='/user/security/aegncy/edit/'+index
    this.props.history.push(url)
  }
}

export default Agency;
