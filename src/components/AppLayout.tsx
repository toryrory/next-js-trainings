import { FC, ReactNode } from "react"; //ReactNode описывает тип children
import Header from "./Header";
import Footer from "./Footer";

type appLayoutProps = {
    children: ReactNode
}

const AppLayout: FC <appLayoutProps> = ({ children }) => {
    return <>
        <Header />
        {children}
        <Footer/>
    </>
}
export default AppLayout;