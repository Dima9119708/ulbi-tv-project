import React, { useState } from 'react';
import { cn } from 'shared/lib/classNames/classNames';
import { Modal } from 'shared/ui/Modal';
import { Button } from 'shared/ui/Button';
import { useTranslation } from 'react-i18next';
import { EnumVariantButton } from 'shared/ui/Button/ui/Button';

interface NavbarProps {
    className?: string
}

const Navbar = (props: NavbarProps) => {
    const {
        className,
    } = props;

    const { t } = useTranslation();
    const [isOpenModal, setOpenModal] = useState(false);

    return (
        <div
            className={cn(
                'items-center px-[2rem] h-[var(--navbar-h)] justify-center flex bg-color-inverted-bg w-full',
                className,
            )}
        >
            <div className="ml-auto">
                <Button onClick={() => setOpenModal(true)} variant={EnumVariantButton.BASE_INVERTED}>
                    {t('login')}
                </Button>
            </div>

            <Modal open={isOpenModal} onClose={() => setOpenModal(false)}>
                Lorem ipsum dolor sit amet, consectetur
                adipisicing elit. Beatae delectus in reprehenderit unde.
                Consectetur dolores ea obcaecati quibusdam sapiente velit vero!
                Architecto
                debitis modi nemo neque optio, quibusdam reprehenderit temporibus!
            </Modal>
        </div>
    );
};

export default Navbar;
