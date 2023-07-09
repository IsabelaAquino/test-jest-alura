import { RecoilRoot } from "recoil";
import Rodape from './Rodape'
import { fireEvent, render, screen } from "@testing-library/react";
import { useListaParticipantes } from "../state/hook/useListaParticipantes";

jest.mock('../state/hook/useListaParticipantes', () => {
    return {
        useListaParticipantes: jest.fn()
    }
})

const mockNavegacao = jest.fn()

jest.mock('react-router-dom', () => {
    return {
        useNavigate: mockNavegacao
    }
})

describe('onde não existem participantes suficientes', () => {

    beforeEach(() => {
        (useListaParticipantes as jest.Mock).mockReturnValue([])
    })

    test('a brincadeira não pode ser iniciada', () => {
        render(<RecoilRoot>
            <Rodape />
        </RecoilRoot>)

        const botao = screen.getByRole('button')
        expect(botao).toBeDisabled()
    })
})

describe('quando existe participantes suficientes', () => { 
    const participantes = ['Ana', 'Beatriz', 'Vitor', 'Theo'];
    beforeEach(() => {
        (useListaParticipantes as jest.Mock).mockReturnValue(participantes)
    })
    test('a brincadeira pode ser iniciada', () => { 
        render(<RecoilRoot>
            <Rodape />
        </RecoilRoot>)
        const botao = screen.getByRole('button')
        fireEvent.click(botao)

        expect(mockNavegacao).toHaveBeenCalledTimes(1);
    })
 })