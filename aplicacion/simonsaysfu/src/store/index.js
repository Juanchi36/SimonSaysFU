import createStore from 'pure-store';
//Se crea el store y el estado inicial
const state = {
	appName: 'Simon Says Fuck You',
	user: null,
	simonView: false,
	styleAlone: { margin: '0 0 0 350px' },
	styleTogether: { margin: 'auto' },
	mensajePerder: ''
};

export const store = createStore(state);
