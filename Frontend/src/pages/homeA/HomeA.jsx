import Chart from "../../components/chart/Chat";
import Featured from "../../components/featuredA/FeaturedA";
import Navbar from "../../components/navbarA/NavbarA";
import Sidebar from "../../components/sidebar/Sidebar";
import Widget from "../../components/widget/Widget";
import List from "../../components/table/Table";
import "./home.scss";


const Home = () => {
    return (
        <div className="home2">
            <Sidebar />
            <div className="homeContainer2">
                <Navbar />
                <div className="widgets">
                    <Widget type="hotels"/>
                    <Widget type="order"/>
                    <Widget type="earning"/>
                    <Widget type="balance"/>
                </div>
                <div className="charts">
                    <Chart title="Last Month (Revenue)" aspect={2/1} />
                </div>
            </div>
        </div>
    )
}

export default Home