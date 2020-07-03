import React, { Component } from 'react';
class EditAgency extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                编辑代理商{this.props.match.params.id}
            </div>
         );
    }
}
 
export default EditAgency;