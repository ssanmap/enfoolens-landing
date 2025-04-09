import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // Elimina las definiciones redundantes de "global" (no son necesarias para React 18+)
});