import React, { useEffect, useState } from 'react';
import { cn } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button';
import { useTranslation } from 'react-i18next';
import { EnumVariantButton } from 'shared/ui/Button/ui/Button';
import { ModalAuth } from 'features/Auth';
import { useSingleStore } from 'shared/config/store/store';
import { userActions, userStore } from 'entity/User';
import { getIsAuth } from 'entity/User/model/store';

interface NavbarProps {
    className?: string
}

const Navbar = (props: NavbarProps) => {
    const {
        className,
    } = props;

    const { t } = useTranslation();
    const [isOpenModal, setOpenModal] = useState(false);

    const isAuth = useSingleStore(userStore, getIsAuth);

    useEffect(() => {
        if (isAuth) {
            setOpenModal(false);
        }
    }, [isAuth]);

    return (
        <div
            className={cn(
                'items-center px-[2rem] h-[var(--navbar-h)] justify-center flex bg-color-inverted-bg w-full',
                className,
            )}
        >
            <div className="ml-auto">
                {
                    isAuth ? (
                        <Button onClick={userActions.logout} variant={EnumVariantButton.BASE_INVERTED}>
                            {t('logout')}
                        </Button>
                    ) : (
                        <Button onClick={() => setOpenModal(true)} variant={EnumVariantButton.BASE_INVERTED}>
                            {t('login')}
                        </Button>
                    )
                }

            </div>

            <ModalAuth open={isOpenModal} onClose={() => setOpenModal(false)} />
        </div>
    );
};

export default Navbar;
