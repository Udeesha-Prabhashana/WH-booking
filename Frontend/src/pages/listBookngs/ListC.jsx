import "./listC.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbarA/NavbarA";
import DatatableBookings from "../../components/datatablebookings/Datatable";

const ListC = ({columns}) => {
    return (
        <div className="list3">
            <Sidebar />
            <div className="listContainer3">
                <Navbar />
                <DatatableBookings columns={columns} />
            </div>
        </div>
    )
}

export default ListC