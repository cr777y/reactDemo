import React, { Component } from "react";
import { Card,Button ,Table} from "antd";
import './index.css'
class ProudctsList extends Component {
  state = {};
  render() {
    const dataSource = [
      {
        key: '1',
        name: '胡彦斌',
        age: 32,
        address: '西湖区湖底公园1号',
      },
      {
        key: '2',
        name: '胡彦祖',
        age: 42,
        address: '西湖区湖底公园1号',
      },
    ];
    
    const columns = [
      {
        title: '姓名',
        dataIndex: 'name',
        key: 'name',
      },
      {
        title: '年龄',
        dataIndex: 'age',
        key: 'age',
      },
      {
        title: '住址',
        dataIndex: 'address',
        key: 'address',
      },  
      {
        title: '操作',
        key: 'action',
        render:(text,record)=>{
          return (
            <Button onClick={()=>{this.props.history.push('/user/editProduct/'+record.key)}}>编辑</Button>
          )
        }
      },
    ];
    return (
      <>
        <Card
          title="产品信息"
          bordered={false}
          extra={<Button type='primary' onClick={()=>{this.props.history.push('/user/addProduct')}}>添加</Button>}
          style={{ width: '100%' }}
        >
          <Table dataSource={dataSource} columns={columns}/>;
        </Card>
      </>
    );
  }
}

export default ProudctsList;
