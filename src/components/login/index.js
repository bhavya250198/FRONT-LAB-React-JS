import React, { useEffect,useState } from "react";
import {Form, Icon, Input, Button,} from "antd";
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { useNavigate } from "react-router-dom";
import 'antd/dist/antd.css';
import "./styles.scss"
import { getUserDetails } from "../api/users";
function Login(){
    const [userData,setUserData] = useState([]);
    const navigate = useNavigate();
    useEffect(()=>{
        getUsers();
    },[])
    const getUsers=async()=>{
        const response = await getUserDetails();
        console.log("response",response);
        setUserData(response.data);
        
    }
    const onFinish =(values)=>{
        console.log("values"+values.username);
        //validate 
        try{
            let temp2 = userData.map( item =>{ if(item.username == values.username)
           return item; })
           if(temp2.length > 0){
                if(temp2[0].password == values.password)
                    navigate("/home")
           }
           else{
            console.log("user does not exist");
           }
        }
        catch(error){
            console.log("error",error);
        }
    }
    return(
        <div id="loginParent">
            <h2>Log In</h2>
            <Form
                 name="normal_login"
                 className="login-form"
                 onFinish={onFinish}
             >
            <Form.Item
                name="username"
                rules={[
                {
                    required: true,
                    message: 'Please input your Username!',
                },
                ]}
             >
             <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
            </Form.Item>
            <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your Password!',
          },
        ]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
            Log In
        </Button>
      </Form.Item>
            </Form>
        </div>
    );
}

export default Login;