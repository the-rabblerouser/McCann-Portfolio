export interface ModalProps {
	styles: object;
	onClose: () => void;
	data: {
		_id?: string;
		description?: string;
		image?: string;
		repository?: string;
		site?: string;
		title?: string;
		tools?: string;
	};
}
