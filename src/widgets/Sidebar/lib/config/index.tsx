import { SidebarItemBaseProps } from 'widgets/Sidebar/ui/SidebarItem/SidebarItem';
import { RoutesPath } from 'shared/config/routes/routes';
import IconMain from 'shared/assets/icons/main-20-20.svg';
import IconAbout from 'shared/assets/icons/about-20-20.svg';
import IconProfile from 'shared/assets/icons/profile-20-20.svg';

export const configItems: SidebarItemBaseProps[] = [
    {
        to: RoutesPath.main,
        name: 'main',
        icon: (
            <IconMain
                height="2rem"
                width="2rem"
                fill="transparent"
                stroke="var(--color-inverted-primary)"
            />
        ),
        isProtected: false,
    },
    {
        to: RoutesPath.about,
        name: 'about_site',
        icon: (
            <IconAbout
                height="2rem"
                width="2rem"
                fill="var(--color-inverted-primary)"
            />
        ),
        isProtected: false,
    },
    {
        to: RoutesPath.profile,
        name: 'profile',
        icon: (
            <IconProfile
                height="2rem"
                width="2rem"
                className="relative left-[0.3rem]"
                fill="var(--color-inverted-primary)"
            />
        ),
        isProtected: true,
    },
];
