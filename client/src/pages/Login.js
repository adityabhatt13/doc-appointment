import React from 'react';
import '../styles/LoginStyles.css';
import { Form, Input } from 'antd';
import { Link } from 'react-router-dom';

const Login = () => {

  //form handler
  const onFinishHandler = (values) => {
    console.log(values);
  }

  return (
    <>
      <div className="form-container">
        <Form layout='vertical' onFinish={onFinishHandler} className='login-form'>
          <h3 className='text-center'>Login Form</h3>
          <Form.Item label='Email' name='email'>
            <Input type='email' required />
          </Form.Item>
          <Form.Item label='Password' name='password'>
            <Input type='password' required />
          </Form.Item>
          <p className='mb-3'>Not a user? <Link to='/register'>Register Here</Link></p>
          <button className='btn btn-primary w-100' type='submit'>Login</button>
        </Form>
      </div>
    </>
  )
}

export default Login
