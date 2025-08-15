import type { Meta, StoryObj } from '@storybook/react-vite';

import { ToastContainer } from '../components/Toast/Toast';
import { toast } from '../components/Toast/toastManager';
import type { JSX } from 'react';

const meta: Meta<typeof ToastContainer> = {
  title: 'Feedback/Toast',
  component: ToastContainer,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
        ### Notification system with an imperative API
        This component displays temporary messages (success, error, info) with animations and auto-dismiss timers.
        `,
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof ToastContainer>;

export const Default: Story = {
  name: 'Triggering Toasts',
  render: (): JSX.Element => (
    <div>
      <ToastContainer />
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '15px',
          alignItems: 'center',
        }}
      >
        <p>Click the buttons to trigger notifications.</p>
        <div style={{ display: 'flex', gap: '10px' }}>
          <button onClick={() => toast.success('The operation was successful!')}>
            Show Success
          </button>
          <button onClick={() => toast.error('An error occurred. Please try again.')}>
            Show Error
          </button>
          <button onClick={() => toast.info('This is an informational message.')}>
            Show Info
          </button>
        </div>
      </div>
    </div>
  ),
};

export const RapidFire: Story = {
  name: 'Rapid Fire Test',
  render: (): JSX.Element => {
    const handleRapidFire = (): void => {
      let count = 0;
      const interval = setInterval(() => {
        if (count >= 5) {
          clearInterval(interval);
          return;
        }
        toast.info(`Quick notification #${count + 1}`, 2000 + count * 500);
        count++;
      }, 300);
    };

    return (
      <div>
        <ToastContainer />
        <button onClick={handleRapidFire}>Run 5 notifications</button>
        <p style={{ marginTop: '10px' }}>
          Tests how layout animation handles the rapid appearance of multiple elements.
        </p>
      </div>
    );
  },
};
