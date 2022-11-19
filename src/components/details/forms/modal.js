import React ,{useState} from "react";
import {DatePicker, Form, Modal,Input,Button} from "antd";
import { addExpenses } from "../../api/expenseDetails";
import { dataURL } from "../../constants/apibaseurl";
function ModalDetails({visibleForm,closeForm}){
    const [visibleModal,setVisibleModal] = useState(visibleForm);
   
   
    const submitForm = (values)=>{
       
        let startDateValues = values.startDate._d.getFullYear()+"-"+values.startDate._d.getMonth()+"-"+values.startDate._d.getDate();
            let requestExpense = {...values,"price":parseInt(values.price),"startDate":startDateValues};
            fetch(dataURL+"/data",{
                method: "POST",
              headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(requestExpense)
        }).then(
          (res)=>res,
          (error)=>{
            console.log(error);
          }
        )
      
            // const addExpense = await addExpenses(requestExpense);
            //         console.log("addExpense",addExpense);
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