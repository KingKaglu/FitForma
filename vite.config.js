import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ command, mode }) => {
  return {
    base: '/', 
    plugins: [react()],
  };
});
