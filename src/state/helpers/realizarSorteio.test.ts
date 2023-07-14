import realizarSorteio from "./realizarSorteio";

describe('dado um sorteio de amigo secreto', () => {
    test('cada participante não sorteie o próprio nome', () => {
        const participantes =  ['Gesonel', 'Vovó Juju', 'Irmão do Jorel', 'Ana Catarina', 'Jorel', 'Lara'];

        const sorteio = realizarSorteio(participantes)
        
        participantes.forEach(participante => {
            const amigoScreto = sorteio.get(participante)
            expect(amigoScreto).not.toEqual(participante)
        })
    })
})