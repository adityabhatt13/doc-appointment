import React, { useState } from 'react';
import '../styles/RegisterStyles.css';
import { Form, Input, message } from 'antd';
import { Link,useNavigate } from 'react-router-dom';
import { axiosClient } from '../utils/axiosClient';

const Register = () => {

  const navigate = useNavigate();

  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  //form handler
  async function onFinishHandler(e) {
    // e.preventDefault();
    try {
      const res = await axiosClient.post('/api/v1/user/register', {
        name,email,password
      });
      if (res.data.success) {
        message.success('Registered Successfully!');
        navigate('/login');
      }
      else {
        message.error(res.data.message);
      }
    } catch (e) {
      console.log(e);
      message.error('Something went wrong');
    }
  }

  return (
    <>
      <div className="form-container">
        <Form layout='vertical' onFinish={onFinishHandler} className='register-form'>
          <h3 className='text-center'>Register Form</h3>
          <Form.Item label='Name' name='name'>
            <Input onChange={(e)=>setName(e.target.value)} type='text' required />
          </Form.Item>
          <Form.Item label='Email' name='email'>
            <Input onChange={(e)=>setEmail(e.target.value)} type='email' required />
          </Form.Item>
          <Form.Item label='Password' name='password'>
            <Input onChange={(e)=>setPassword(e.target.value)} type='password' required />
          </Form.Item>
          <p className='mb-3'>Already a user? <Link to='/login'>Login Here</Link></p>
          <button className='btn btn-primary w-100' type='submit'>Register</button>
        </Form>
      </div>
    </>
  )
}

export default Register
