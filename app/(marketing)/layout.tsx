import { Children } from "react";
import { Navbar } from "./_components/navbar";

const MarketingLayout = ({
    children
}:{
    children:React.ReactNode
}) => {
    return (
        <div className="h-full ">
            <Navbar />
            <main className="h-full">
                <div className="pt-40 dark:bg-[#1F1F1F]">
                    {children}
                </div>
            </main>
        </div>
    );
}
 
export default MarketingLayout;