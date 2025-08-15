export interface ToastProps {
  id: number;
  message: string;
  type: 'success' | 'error' | 'info';
  duration?: number;
}

let toasts: ToastProps[] = [];
const listeners: Array<(toasts: ToastProps[]) => void> = [];

const toastManager = {
  add(message: string, type: ToastProps['type'], duration?: number) {
    const id = Date.now();
    toasts = [{ id, message, type, duration }, ...toasts];
    listeners.forEach((listener) => listener(toasts));
  },
  remove(id: number) {
    toasts = toasts.filter((t) => t.id !== id);
    listeners.forEach((listener) => listener(toasts));
  },
  subscribe(listener: (toasts: ToastProps[]) => void) {
    listeners.push(listener);
    return () => {
      const index = listeners.indexOf(listener);
      if (index > -1) {
        listeners.splice(index, 1);
      }
    };
  },
};

export const toast = {
  success: (message: string, duration?: number) => toastManager.add(message, 'success', duration),
  error: (message: string, duration?: number) => toastManager.add(message, 'error', duration),
  info: (message: string, duration?: number) => toastManager.add(message, 'info', duration),
};

export default toastManager;
