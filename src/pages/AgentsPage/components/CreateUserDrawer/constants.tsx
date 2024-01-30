import { Rule } from 'rc-field-form/lib/interface';
import React from 'react';

import { Input, Select } from 'antd';
import {
  CheckOutlined,
  LockOutlined,
  MailOutlined,
  PhoneOutlined,
  UserOutlined,
} from '@ant-design/icons';

export const useUserInputFields: () => {
  render?: React.JSX.Element;
  name?: string;
  rules?: Rule[];
}[] = () => {
  return [
    {
      name: 'name',
      render: <Input placeholder="Name" style={{ width: '300px' }} prefix={<UserOutlined />} />,
      rules: [
        {
          required: true,
          message: 'Please input your Name',
        },
      ],
    },
    {
      name: 'email',
      render: <Input placeholder="E-mail" style={{ width: '300px' }} prefix={<MailOutlined />} />,
      rules: [
        {
          required: true,
          message: 'Please input your E-mail',
        },
        {
          type: 'email',
          message: 'The input is not valid E-mail!',
        },
      ],
    },
    {
      name: 'phone',
      render: <Input placeholder="Phone" style={{ width: '300px' }} prefix={<PhoneOutlined />} />,
      rules: [
        {
          required: true,
          message: 'Please input your Phone',
        },
      ],
    },
    {
      name: 'password',
      render: (
        <Input.Password
          placeholder="Password"
          style={{ width: '300px' }}
          prefix={<LockOutlined />}
        />
      ),
      rules: [
        {
          required: true,
          message: 'Please input your password',
        },
        {
          min: 8,
          message: 'Password must be at least 8 characters',
        },
      ],
    },
    {
      name: 'password_confirmation',
      render: (
        <Input.Password
          placeholder="Confirm password"
          style={{ width: '300px' }}
          prefix={<CheckOutlined />}
        />
      ),
      rules: [
        {
          required: true,
          message: 'Please input your password confirmation',
        },
        {
          min: 8,
          message: 'Password must be at least 8 characters',
        },
      ],
    },
    {
      name: 'role',
      render: (
        <Select
          placeholder="Role"
          style={{ width: '300px' }}
          options={[
            { name: 'admin', label: 'Admin', value: 'admin' },
            { name: 'supervisor', label: 'Supervisor', value: 'supervisor' },
            { name: 'agent', label: 'Agent', value: 'agent' },
          ]}
        />
      ),
      rules: [
        {
          required: true,
          message: 'Choose your role',
        },
      ],
    },
  ];
};
