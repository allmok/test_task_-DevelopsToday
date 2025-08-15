# React Component Library with Storybook

This repository is an implementation of a test task to create a small library of React components. The project uses TypeScript, Vite, and Storybook to develop, visualize, and test components in an isolated environment.

## Project goal

### Create a Storybook-based UI component system that includes:

- Smart Input component (multi-type, with password visibility toggle and clear option).

- Toast notification component (animated, with auto-close).

- Nested Sidebar Menu with slide-out animation.

### Technology stack

- React
- Vite
- TypeScript
- Framer Motion
- React Hook Form
- ESLint & Prettier

## Getting started

1. Clone repository
```  bash
git clone https://github.com/allmok/test_task_-DevelopsToday
```  
2. Install dependencies:
```  bash
npm install
```  
3. run Storybook
```  bash
npm run storybook
```  
4. Open http://localhost:6006 in your browser.

--- 

## Components
### 1. Input Component

- A multifunctional component for data entry.

- Password visibility toggle: If type="password", an icon appears to show/hide the password.

- Clear field: If clearable=true, an "X" button appears to quickly clear the entered value.

- Type support: Works with text, password, number and other standard types.

### Screenshots

| ![Text-empty](./Screenshots/Text-empty.png)| ![Text-text](./Screenshots/Text-text.png)           |
| -------------------------------------------------- | -------------------------------------------------- |
| ![Password-empty](./Screenshots/Password-empty.png) | ![Password field with visibility toggle](./Screenshots/Password-with-clear.png) |
| ![Password-text-open](./Screenshots/Password-text-open.png)| ![Password-text-close](./Screenshots/Password-text-close.png)           |
| -------------------------------------------------- | -------------------------------------------------- |
| ![Integration-form-error](./Screenshots/Integration-form-error.png) | ![Integration-form-error](./Screenshots/Integration-form-no-error.png) |
| ![Number.png](./Screenshots/Number.png) | ![Password-with-clear](./Screenshots/Password-with-clear.png) |

### 2. Toast Component

- Notification system with imperative API for displaying temporary messages.

- Positioning: Appears in the lower right corner of the screen.

- Auto-close: Automatically disappears after a specified period of time.

- Animation: Smooth appearance and disappearance using Framer Motion.

- Types: Supports different states (success, error, info).


### Screenshots

| ![Successful toast](./Screenshots/Toast-green.png)| ![Toast error](./Screenshots/Toast-red.png)           |
| -------------------------------------------------- | -------------------------------------------------- |
| ![Toast info](./Screenshots/Toast-blue.png) | ![Many Toast](./Screenshots/Toast-3-green.png) |
| ![various toasts](./Screenshots/Toast-diff.png)| ![Many toast](./Screenshots/Toast-many-op.png)     |


### 3. Sidebar Menu Component

- Sidebar navigation menu.

- Animation: Smoothly slides out from the right.

- Nesting: Supports unlimited levels of menu nesting (accordion).

- Closing: Closes when you click on the background or the close button.

### Screenshots

| ![SideBar-close](./Screenshots/SideBar-close.png)| ![SideBar-Open-single](./Screenshots/SideBar-Open-single.png)           |
| -------------------------------------------------- | -------------------------------------------------- |
| ![SideBar-open-nested](./Screenshots/SideBar-open-nested.png) | ![Sidebar-interactive-close](./Screenshots/Sidebar-interactive-close.png) |
| ![Sidebar-interactive-open](./Screenshots/Sidebar-interactive-open.png)|