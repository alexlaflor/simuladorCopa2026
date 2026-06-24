import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/simuladorCopa2026/',  // ← mude para o nome do seu repositório no GitHub
})
