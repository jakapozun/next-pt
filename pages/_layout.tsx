import React, {PropsWithChildren} from 'react';
import Nav from "@/components/Nav/Nav";
import { Aboreto } from "@next/font/google";
const aboreto = Aboreto({weight: '400', subsets: ['latin']});
const Layout = ({children}: PropsWithChildren) => {
    return (
        <div className={aboreto.className}>
            <Nav />
            {children}
        </div>
    );
};

export default Layout;
