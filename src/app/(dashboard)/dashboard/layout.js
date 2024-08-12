import Sidenav from "../components/Sidenav";
import Header from "../components/Header";
import { Toaster } from "@/components/ui/toaster";

export const metadata = {
    title: 'Do Join Dashboard',
    description: 'Basic dashboard '
};

function Layout({ children }) {
    return (
        <div className="flex w-full flex-col bg-muted/40">
            <Header />
            <div className="flex gap-8 ">
                <aside className="sidenav group fixed h-screen left-0 z-10 w-16 flex-col border-r bg-background transition-all duration-300 sm:flex hover:w-auto hover:px-4 peer"> 
                    <Sidenav />
                </aside>
                <div className="content w-full pl-[3.4rem] mx-8 my-6 auto-rows-max transition-all duration-300 peer-hover:ml-[10rem]"> 
                    {children}
                </div>
            </div>
            <Toaster />
        </div>
    )
}

export default Layout;
