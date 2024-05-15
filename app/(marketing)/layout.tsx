import Navbar from "./_components/navbar";

const MarketingLayout = ({
    children
} : {
    children : React.ReactNode;
}) => {
    return ( 
        <div className="h-screen dark:bg-[#1F1F1F]">
            <Navbar/>
            <main className="h-screen pt-40">
                {children}
            </main>
        </div>
     );
}
 
export default MarketingLayout;