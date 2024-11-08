import Banner from "../Banner/Banner";
import Faq from "../Faq/Faq";
import Features from "../Features/Features";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

const Home = () => {
    return (
        <div className="min-w-screen">
            <Navbar></Navbar>
            <Banner></Banner>
            <div className="lg:px-5 md:px-5 sm:px-2">
            <Features></Features>
            <Faq></Faq>
            </div>
            <Footer></Footer>
            
        </div>
    );
};

export default Home;