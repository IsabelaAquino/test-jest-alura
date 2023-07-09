import { act, fireEvent, render, screen } from "@testing-library/react";
import Formulario from "./Formulario";
import { RecoilRoot } from "recoil";

//jest
describe('o comportamento do formulario', () => {
    test('quando o input esta vazio novos participantes nao podem ser adicionados', () => {

        render(<RecoilRoot>
            <Formulario />
        </RecoilRoot>)
        //econtrar no DOM o input
        const input = screen.getByPlaceholderText('Insira os nomes dos participantes')
        //encontrar o botao
        const botao = screen.getByRole('button')
        //garantir que o input esteja no documento
        expect(input).toBeInTheDocument()
        //garantir que o botão esteja desabilitado
        expect(botao).toBeDisabled()
    });
    
    test('adicionar um participante caso exista um nome preenchido', () => {
        render(<RecoilRoot>
                <Formulario />
            </RecoilRoot>)
        //econtrar no DOM o input
        const input = screen.getByPlaceholderText('Insira os nomes dos participantes')
        //encontrar o botao
        const botao = screen.getByRole('button')
    
        //inserir um valor no input 
        fireEvent.change(input, {
            target: {
                value: 'Isabela Aquino'
            }
        })
    
        //clicar no botao de submeter
        fireEvent.click(botao)
    
        //garantir que o input esteja com o foco ativo
        expect(input).toHaveFocus()
    
        //garantir que o input não tenha um valor
        expect(input).toHaveValue("")
    });
    
    test('adicionar um participante caso exista um nome preenchido', () => {
        render(<RecoilRoot>
            <Formulario />
        </RecoilRoot>)
        //econtrar no DOM o input
        const input = screen.getByPlaceholderText('Insira os nomes dos participantes')
        //encontrar o botao
        const botao = screen.getByRole('button')
    
        //inserir um valor no input 
        fireEvent.change(input, {
            target: {
                value: 'Isabela Aquino'
            }
        })
        //clicar no botao de submeter
        fireEvent.click(botao)
        fireEvent.change(input, {
            target: {
                value: 'Isabela Aquino'
            }
        })
        fireEvent.click(botao)
    
        const mensagemDeErro = screen.getByRole('alert')
    
        expect(mensagemDeErro.textContent).toBe('Nomes dublicados não são permitidos!')
    })
    
    test('a mensagem de erro deve sumir após os timers', () => {
        jest.useFakeTimers()
        render(<RecoilRoot>
            <Formulario />
        </RecoilRoot>)
        //econtrar no DOM o input
        const input = screen.getByPlaceholderText('Insira os nomes dos participantes')
        //encontrar o botao
        const botao = screen.getByRole('button')
    
        //inserir um valor no input 
        fireEvent.change(input, {
            target: {
                value: 'Isabela Aquino'
            }
        })
        //clicar no botao de submeter
        fireEvent.click(botao)
        fireEvent.change(input, {
            target: {
                value: 'Isabela Aquino'
            }
        })
        fireEvent.click(botao)
    
        let mensagemDeErro = screen.queryByRole('alert')
    
        expect(mensagemDeErro).toBeInTheDocument()
        //esperar n segundos
        act(() => {
            jest.runAllTimers()
        })
    
        mensagemDeErro = screen.queryByRole('alert')
    
        expect(mensagemDeErro).toBeNull()
    })
})
