import { Link } from 'shared/ui/Link';
import { EnumVariantLink } from 'shared/ui/Link/ui/Link';
import { cn } from 'shared/lib/classNames/classNames';
import { memo, ReactNode } from 'react';
import { useTranslation } from 'react-i18next';
import { useSingleStore } from 'shared/config/store/store';
import { userStore } from 'entity/User';
import { getIsAuth } from 'entity/User/model/store';

export interface SidebarItemBaseProps {
    to: string,
    icon: ReactNode,
    name: string,
    isProtected: boolean,
}

interface SidebarItemProps extends SidebarItemBaseProps {
    collapse: boolean,
}

const SidebarItem = (props: SidebarItemProps) => {
    const {
        collapse, to, icon, name, isProtected,
    } = props;

    const { t } = useTranslation();

    const isAuth = useSingleStore(userStore, getIsAuth);

    if (isProtected && !isAuth) {
        return null;
    }

    return (
        <Link
            to={to}
            variant={EnumVariantLink.SECONDARY}
            className={cn('flex flex-row items-center gap-[0_0.4rem]')}
        >
            { icon }

            <span className={cn('transition-[opacity_0.3s_ease] flex-1', {
                'w-0 opacity-0': collapse === false,
                'w-[100%] opacity-100': collapse === true,
            })}
            >
                <span className="w-auto border-b-[0.1rem] border-solid">{t(name)}</span>
            </span>
        </Link>
    );
};

export default memo(SidebarItem);
