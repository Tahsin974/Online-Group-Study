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
            <Features></Features>
            <Faq></Faq>
            <Footer></Footer>
            
        </div>
    );
};

export default Home;