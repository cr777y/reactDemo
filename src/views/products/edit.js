import React, { Component } from "react";
import { Card, Button } from "antd";
import './index.css'
class EditProducts extends Component {
  state = {};
  render() {
    return (
      <>
        <Card
          title="编辑产品"
          bordered={false}
          extra={
            <Button
              type="primary"
              onClick={() => {
                this.props.history.push("/user/products/info");
              }}
            >
              返回
            </Button>
          }
          style={{ width: "100%"}}
        >
               编辑产品
        {this.props.match.params.id}
        </Card>
      </>
    );
  }
}

export default EditProducts;
