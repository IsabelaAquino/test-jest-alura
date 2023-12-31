import { atom } from 'recoil';

export const listaParticipantesState = atom<string[]>({
    key: 'listaParticipantesState',
    default: []
});

export const resultadoAmigoSecreto = atom<Map<string, string>>({
    key: 'resultadoAmigoSegreto',
    default: new Map()
})

export const erroState = atom<string>({
    key: 'erroState',
    default: ''
});