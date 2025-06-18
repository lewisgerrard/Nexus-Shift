"use client"

import { Button, Card, DatePicker, Form, Input, Select, Space, Table, Tag } from "antd"
import { UserOutlined, MailOutlined, PhoneOutlined } from "@ant-design/icons"

const { Option } = Select

// Sample data for the table
const dataSource = [
  {
    key: "1",
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
    tags: ["developer", "nice"],
  },
  {
    key: "2",
    name: "Jim Green",
    age: 42,
    address: "London No. 1 Lake Park",
    tags: ["designer"],
  },
]

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Age",
    dataIndex: "age",
    key: "age",
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address",
  },
  {
    title: "Tags",
    key: "tags",
    dataIndex: "tags",
    render: (tags: string[]) => (
      <>
        {tags.map((tag) => (
          <Tag color="blue" key={tag}>
            {tag}
          </Tag>
        ))}
      </>
    ),
  },
]

export function AntdDemo() {
  const [form] = Form.useForm()

  const onFinish = (values: any) => {
    console.log("Form values:", values)
  }

  return (
    <div className="p-6 space-y-6">
      <h2 className="text-2xl font-bold mb-4">Ant Design Components Demo</h2>

      {/* Buttons */}
      <Card title="Buttons" className="mb-6">
        <Space wrap>
          <Button type="primary">Primary Button</Button>
          <Button>Default Button</Button>
          <Button type="dashed">Dashed Button</Button>
          <Button type="text">Text Button</Button>
          <Button type="link">Link Button</Button>
          <Button danger>Danger Button</Button>
        </Space>
      </Card>

      {/* Form */}
      <Card title="Form Example" className="mb-6">
        <Form form={form} layout="vertical" onFinish={onFinish} style={{ maxWidth: 600 }}>
          <Form.Item label="Name" name="name" rules={[{ required: true, message: "Please input your name!" }]}>
            <Input prefix={<UserOutlined />} placeholder="Enter your name" />
          </Form.Item>

          <Form.Item
            label="Email"
            name="email"
            rules={[
              { required: true, message: "Please input your email!" },
              { type: "email", message: "Please enter a valid email!" },
            ]}
          >
            <Input prefix={<MailOutlined />} placeholder="Enter your email" />
          </Form.Item>

          <Form.Item label="Phone" name="phone">
            <Input prefix={<PhoneOutlined />} placeholder="Enter your phone" />
          </Form.Item>

          <Form.Item label="Service" name="service">
            <Select placeholder="Select a service">
              <Option value="consultancy">Digital Transformation Consultancy</Option>
              <Option value="website">Website Production</Option>
              <Option value="application">Web-Based Applications</Option>
              <Option value="combined">Combined Solutions</Option>
            </Select>
          </Form.Item>

          <Form.Item label="Date" name="date">
            <DatePicker style={{ width: "100%" }} />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Card>

      {/* Table */}
      <Card title="Table Example">
        <Table dataSource={dataSource} columns={columns} />
      </Card>
    </div>
  )
}
