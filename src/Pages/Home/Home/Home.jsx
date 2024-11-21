import Banner from "../Banner/Banner";
import Faq from "../Faq/Faq";
import Features from "../Features/Features";



const Home = () => {
    
    return (
        <div className="min-w-screen">
            <Banner></Banner>
            <div className="lg:px-5 md:px-5 sm:px-2">
            <Features></Features>
            <Faq></Faq>
            </div>
            
            
        </div>
    );
};

export default Home;