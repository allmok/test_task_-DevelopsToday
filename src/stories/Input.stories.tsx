import { useState, type JSX } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Input, type InputProps } from '../components/Input/Input';
import { useForm, type SubmitHandler } from 'react-hook-form';

const meta: Meta<typeof Input> = {
  title: 'Forms/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['text', 'password', 'number'],
    },
    placeholder: { control: 'text' },
    disabled: { control: 'boolean' },
    clearable: { control: 'boolean' },
  },
};

export default meta;

type Story = StoryObj<typeof Input>;

const ManagedInput = (args: InputProps): JSX.Element => {
  const [value, setValue] = useState('Some value');
  return <Input {...args} value={value} onChange={(e) => setValue(e.target.value)} />;
};

export const Text: Story = {
  args: {
    type: 'text',
    placeholder: 'Enter your name...',
  },
};

export const Password: Story = {
  args: {
    type: 'password',
    placeholder: 'Enter your password...',
  },
};

export const Number: Story = {
  args: {
    type: 'number',
    placeholder: 'Enter a number...',
  },
};

export const Clearable: Story = {
  render: (args) => <ManagedInput {...args} />,
  args: {
    type: 'text',
    clearable: true,
  },
};

export const PasswordWithClear: Story = {
  render: (args) => <ManagedInput {...args} />,
  args: {
    type: 'password',
    placeholder: 'Enter password...',
    clearable: true,
  },
};

type FormValues = {
  username: string;
  email: string;
};

const FormExample = (): JSX.Element => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    alert(JSON.stringify(data));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} style={{ maxWidth: '400px' }}>
      <div style={{ marginBottom: '15px' }}>
        <label>Username</label>
        <Input
          placeholder="For example, user123"
          {...register('username', { required: 'This field is required' })}
        />
        {errors.username && <p style={{ color: 'red' }}>{errors.username.message}</p>}
      </div>

      <div style={{ marginBottom: '15px' }}>
        <label>Email</label>
        <Input
          placeholder="example@mail.com"
          {...register('email', {
            required: 'Email is required',
            pattern: {
              value: /^\S+@\S+$/i,
              message: 'Incorrect email address entered',
            },
          })}
        />
        {errors.email && <p style={{ color: 'red' }}>{errors.email.message}</p>}
      </div>

      <button type="submit">Send</button>
    </form>
  );
};

export const WithReactHookForm: Story = {
  name: 'Integration with React Hook Form',
  render: () => <FormExample />,
};
