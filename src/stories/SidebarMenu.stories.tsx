import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { SidebarMenu, type MenuItem } from '../components/SidebarMenu/SidebarMenu';

const meta: Meta<typeof SidebarMenu> = {
  title: 'Navigation/SidebarMenu',
  component: SidebarMenu,
  parameters: {
    backgrounds: {
      default: 'light',
      values: [{ name: 'light', value: '#f0f0f063' }],
    },
  },
};

export default meta;
type Story = StoryObj<typeof SidebarMenu>;

const singleLevelItems: MenuItem[] = [
  { label: 'Home' },
  { label: 'Profile' },
  { label: 'Settings' },
  { label: 'Logout' },
];

const nestedItems: MenuItem[] = [
  { label: 'Dashboard' },
  {
    label: 'Products',
    items: [
      { label: 'All Products' },
      { label: 'Add New' },
      { label: 'Categories' },
    ],
  },
  {
    label: 'Users',
    items: [
      { label: 'All Users' },
      { label: 'Add New User' },
      {
        label: 'Roles',
        items: [{ label: 'Admin' }, { label: 'Editor' }],
      },
    ],
  },
  { label: 'Analytics' },
];

const InteractiveSidebar = (args: { menuItems: MenuItem[] }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setIsOpen(true)}>Open Sidebar</button>
      <SidebarMenu
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        menuItems={args.menuItems}
      />
    </div>
  );
};

export const Closed: Story = {
  args: {
    isOpen: false,
    menuItems: singleLevelItems,
  },
};

export const OpenWithSingleLevel: Story = {
  name: 'Open / Single Level',
  args: {
    isOpen: true,
    menuItems: singleLevelItems,
    onClose: () => alert('Close button clicked!'),
  },
};

export const OpenWithNestedLevels: Story = {
  name: 'Open / Nested Levels',
  args: {
    isOpen: true,
    menuItems: nestedItems,
    onClose: () => alert('Close button clicked!'),
  },
};

export const Interactive: Story = {
    name: "Interactive Mode",
    render: () => <InteractiveSidebar menuItems={nestedItems} />
}