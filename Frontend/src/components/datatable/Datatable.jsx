import "./datatable.scss";
import { DataGrid } from '@mui/x-data-grid';
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch";
import axios from "axios";

const Datatable = ({ columns }) => {
  const location = useLocation();
  const path = location.pathname.split("/")[1];

  const [list, setList] = useState([]);
  const { data, loading, error } = useFetch(`http://127.0.0.1:5000/${path}`);

  useEffect(() => {
    setList(data || []); // Ensure default to empty array if data is undefined
  }, [data]);

  const handleDelete = async (id) => {
  try {
    await axios.post(`http://127.0.0.1:5000/DeleteHotel`, {
      hotel_id: id
    });
    setList(list.filter((item) => item.hotel_id !== id)); // Use hotel_id here
  } catch (err) {
    console.error('Error deleting item:', err);
  }
};


  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <div className="deleteButton" onClick={() => handleDelete(params.row.hotel_id)}>
              Delete
            </div>
          </div>
        );
      },
    },
  ];

  return (
    <div className="datatable1">
      <div className="datatableTitle1">
        {path}
        <Link to={`/${path}/new`} className="link1">
          Add New
        </Link>
      </div>
      <DataGrid
        className="datagrid1"
        rows={list}
        columns={columns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
        getRowId={(row) => row.hotel_id} // Use hotel_id as the unique identifier
      />
    </div>
  );
};

export default Datatable;
