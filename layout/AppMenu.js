import getConfig from 'next/config';
import React, { useContext } from 'react';
import AppMenuitem from './AppMenuitem';
import { LayoutContext } from './context/layoutcontext';
import { MenuProvider } from './context/menucontext';
import Link from 'next/link';

const AppMenu = () => {
    const { layoutConfig } = useContext(LayoutContext);
    const contextPath = getConfig().publicRuntimeConfig.contextPath;
    const model = [
        {
            label: 'Home',
            items: [
                /** Menu */
                { label: 'Dashboard', icon: 'pi pi-fw pi-home', to: '/' },
                { label: 'CODEBASE 1', icon: 'pi pi-fw pi-star', to: '/_codebase/codebase1' },
                { label: 'GUDANG', icon: 'pi pi-fw pi-star', to: '/master/stok/gudang' },
                { label: 'CETAK', icon: 'pi pi-fw pi-star', to: '/cetak' },
                { label: 'KASIR', icon: 'pi pi-fw pi-star', to: '/kasir' }
            ]
        },
    ];

    return (
        <MenuProvider>
            <ul className="layout-menu">
                {model.map((item, i) => {
                    return !item.seperator ? <AppMenuitem item={item} root={true} index={i} key={item.label} /> : <li className="menu-separator"></li>;
                })}

                {/* <Link href="https://www.primefaces.org/primeblocks-react" target="_blank" style={{ cursor: 'pointer' }}>
                    <img alt="Prime Blocks" className="w-full mt-3" src={`${contextPath}/layout/images/banner-primeblocks${layoutConfig.colorScheme === 'light' ? '' : '-dark'}.png`} />
                </Link> */}
            </ul>
        </MenuProvider>
    );
};

export default AppMenu;
