import { Modal, ModalPropsBase } from 'shared/ui/Modal';
import { Suspense } from 'react';
import { Loading } from 'shared/ui/Loading';
import { FormLazy } from '../Form/FormLazy';

interface ModalAuthProps extends ModalPropsBase {
}

const ModalAuth = (props: ModalAuthProps) => {
    const { open, onClose } = props;

    return (
        <Modal classNameChildren="w-[40rem]" open={open} onClose={onClose}>
            <Suspense fallback={<Loading on />}>
                <FormLazy />
            </Suspense>
        </Modal>
    );
};

export default ModalAuth;
