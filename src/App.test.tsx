import { render, screen } from '@testing-library/react'
import App from './App'

describe('Testes para o app', () => {
    it('deve renderizar corretamente', () => {
        render(<App />)
        expect(screen.getByText('Olha só que legal minha miniatura do Batmóvel.')).toBeInTheDocument()
    })
})