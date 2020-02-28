import { unmountComponentAtNode } from 'react-dom';

export const close = () => {
	const el = document.getElementById('preview');
	if (el) {
		unmountComponentAtNode(el);
		el && document.body.removeChild(el);
		window.removeEventListener('keydown', keyDownListen);
	}
};

export const keyDownListen = (e: KeyboardEvent) => {
	if (e.keyCode === 27) {
		close();
	}
};
