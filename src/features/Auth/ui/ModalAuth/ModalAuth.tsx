import { Modal, ModalPropsBase } from 'shared/ui/Modal';
import Form from '../Form/Form';

interface ModalAuthProps extends ModalPropsBase {
}

const ModalAuth = (props: ModalAuthProps) => {
    const { open, onClose } = props;

    return (
        <Modal classNameChildren="w-[40rem]" open={open} onClose={onClose}>
            <Form />
        </Modal>
    );
};

export default ModalAuth;
