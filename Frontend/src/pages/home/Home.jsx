import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import Featured from "../../components/featured/Featured";
import PropertyList from "../../components/propertyList/PropertyList";
import "./home.css"
import FeaturesProperties from "../../components/featuredProperties/FeaturedProperties";
import MailList from "../../components/MailList/MailList";
import Footer from "../../components/footer/Footer";
import Featured2 from "../../components/featured2/Featured";
import Widget_L from "../../components/widget_L/Widget_L";

const Home = () => {
    return (
        <div>
            <Navbar />
            <Header />
            <div className="homeContainer">
                <h1 className="homeTitle"> Cities</h1> 
                <Featured />
                <Featured2 />
                <h1 className="homeTitle"> Top Hotels</h1>
                    <div className="widgetsA">
                        <Widget_L type="user"/>
                        <Widget_L type="order"/>
                        <Widget_L type="order"/>
                    </div>
                    <div className="widgetsA">
                        <Widget_L type="earning"/>
                        <Widget_L type="balance"/>
                        <Widget_L type="balance"/>
                </div>
                <MailList />
            </div>
            <div className="homeContainer3">
                <Footer />
            </div>
        </div>

    );
};

export default Home