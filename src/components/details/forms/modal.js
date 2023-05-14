import React ,{useState} from "react";
import {DatePicker, Form, Modal,Input,Button} from "antd";

function ModalDetails({visibleForm,closeForm,sendValues}){
    const [visibleModal,setVisibleModal] = useState(visibleForm);
   
   
    const submitForm = (values)=>{
       let  month = values.startDate._d.getMonth()+1;
            month = month > 10 ? "0"+month :month;
        let startDateValues = values.startDate._d.getFullYear()+"-"+month+"-"+values.startDate._d.getDate();
            let requestExpense = {...values,"price":parseInt(values.price),"startDate":startDateValues};
            //props function
             sendValues(requestExpense);
            setVisibleModal(false);

    }
    return(
        <div>
            <Modal open={visibleModal} onCancel={closeForm} footer={null}>
                <h2>Add Expense</h2>
                <Form 
                name="basic"
                labelCol={{
                  span: 8,
                }}
                wrapperCol={{
                  span: 16,
                }}
                onFinish={submitForm}
                >
                    <Form.Item
                     name="name"
                     label="Name"
                     rules={[
                        {
                          required: true,
                          message: 'Please input your name!',
                        },
                      ]}>
                        <Input />
                    </Form.Item>
                    <Form.Item
                     name="productPurchased"
                     label="Product Purchased"
                     rules={[
                        {
                          required: true,
                          message: 'Please input your product purchased!',
                        },
                      ]}>
                        <Input />
                    </Form.Item>
                    <Form.Item
                     name="price"
                     label="Price"
                     rules={[
                        {
                          required: true,
                          message: 'Please input your price!',
                        },
                      ]}>
                        <Input />
                    </Form.Item>
                    <Form.Item
                     name="startDate"
                     label="Start Date"
                     rules={[
                        {
                          required: true,
                          message: 'Please input your start date!',
                        },
                      ]}>
                        <DatePicker />
                    </Form.Item>
                      <Form.Item>
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                      </Form.Item>
                </Form>
            </Modal>
        </div>
    )
}
export default ModalDetails;