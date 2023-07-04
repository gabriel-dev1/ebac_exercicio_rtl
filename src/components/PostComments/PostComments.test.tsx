import { fireEvent, render, screen } from '@testing-library/react'
import PostComment from '.'
/* import Post from '.'; */

describe('Teste para o componente PostComment', () => {
    it('Deve renderizar o componente corretamente', () => {
        render(<PostComment />);
        expect(screen.getByText('Comentar')).toBeInTheDocument();
    });

    it('Deve registrar três comentários', () => {
        render(<PostComment />)
        /*  const { debug } = render(<PostComment />) */

        fireEvent.change(screen.getByTestId('text-comentar'), {
            target: {
                value: 'O'
            }
        })

        fireEvent.click(screen.getByTestId('btn-comentar'))

        fireEvent.change(screen.getByTestId('text-comentar'), {
            target: {
                value: 'carro'
            }
        })

        fireEvent.click(screen.getByTestId('btn-comentar'))

        fireEvent.change(screen.getByTestId('text-comentar'), {
            target: {
                value: 'do batman'
            }
        })

        fireEvent.click(screen.getByTestId('btn-comentar'))

        /* debug() */
        expect(screen.getAllByTestId('comentar-test')).toHaveLength(3)
    })
})