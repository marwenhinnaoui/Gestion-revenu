import {
  Row,
  Col,
  Card,
  Table,
  Button,
  Modal,
  Form,
  Radio,
  Input,
  Tooltip,
  Space,

} from "antd";
import React, { useState, useEffect } from 'react';

import { EditOutlined, DeleteOutlined, AppstoreAddOutlined, InfoCircleOutlined} from "@ant-design/icons";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";

const columns = [
  {
    title: "AUTHOR",
    dataIndex: "name",
    key: "name",
    width: "32%",
  },
  {
    title: "YEAR",
    dataIndex: "year",
    key: "year",
  },

  {
    title: "COLOR",
    key: "color",
    dataIndex: "color",
  },
  {
    title: "ACTIONS",
    dataIndex: "action",
    key: "action",
    render: () => (
          <div>
          <div className="ant-employed">
            <span>14/04/17</span>
            <div className="d-flex">
              <EditOutlined onClick={''} className="Action_edit" />
              <DeleteOutlined onClick={''} className="Action_delete" />
            </div>
          </div>
        </div>
    )},

];





function Tables() {

  const api= axios.create({
    baseURL:'https://www.breakingbadapi.com/api/',
    headers: {
        "Content-Type": "application/json"
        }
    
    }
  )
  const [data, setData]=useState([])
  useEffect(()=>{ 
    api.get('/characters').then(response =>{
      // console.log('response==',response.data)
      setData(data.concat(response.data))
      console.log('data',data)
    }).catch(error =>{
        console.log(error)
    })
  },[])
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
    <Button onClick={showModal} className="Floating " type="primary" shape="round" icon={<AppstoreAddOutlined />}/>
      <div className="tabled fs-3">
        <Row className="" gutter={[24, 0]}>
          <Col  xs="24" xl={24}>
            <Card
              bordered={false}
              className="criclebox tablespace mb-24" 
              title="Authors Table"
            >
              <div className="table-responsive">
                <Table
                  columns={columns}
                  dataSource={data}
                  pagination={false}
                  className="ant-border-space"
                />
              </div>
            </Card>
          </Col>
        </Row>
      </div>
      <Modal title="Add" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <Form
        // form={form}
        layout="vertical"
        // initialValues={{ requiredMarkValue: requiredMark }}
        // onValuesChange={onRequiredTypeChange}
        // requiredMark={requiredMark}
        >
          <Form.Item label="Field A">
            <Input placeholder="input placeholder" />
          </Form.Item>
          <Form.Item
            label="Field B"
          >
            <Input placeholder="input placeholder" />
          </Form.Item>
          <Form.Item
            label="Field B"
          >
            <Input placeholder="input placeholder" />
          </Form.Item>
          <Form.Item
            label="Field B"
          >
            <Input placeholder="input placeholder" />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
}

export default Tables;
