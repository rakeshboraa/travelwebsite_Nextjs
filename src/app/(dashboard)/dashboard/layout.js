
import Sidenav from "../components/Sidenav";
import Header from "../components/Header";

export const metadata = {
    title: 'Do Join Dashboard',
    description: 'Basic dashboard '
};

export default function DashboardLayout({
    children
}) {
    return (
        <div className="flex  w-full flex-col bg-muted/40">
            <Header />
            <div className="flex gap-8">
                <Sidenav />
                <div className="w-full mx-12 my-6 auto-rows-max">
                {children}
                </div>
            </div>

        </div>
    );
}