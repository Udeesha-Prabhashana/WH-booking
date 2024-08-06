export const hotelColumns = [
  { field: "hotel_id", headerName: "ID", width: 70 },
  {
    field: "title",
    headerName: "Hotel Name",
    width: 230,
  },
  {
    field: "description",
    headerName: "Discription",
    width: 500,
  },
  {
    field: "city",
    headerName: "City",
    width: 150,
  },
];

export const roomColumns = [
  { field: "room_id", headerName: "ID", width: 70 },
  {
    field: "title",
    headerName: "Title",
    width: 230,
  },
  {
    field: "facilities",
    headerName: "Description",
    width: 400,
  },
  {
    field: "price",
    headerName: "Price",
    width: 150,
  },
  {
    field: "maxPeople",
    headerName: "Max People",
    width: 100,
  },
];

export const bookingsColumns = [
  { field: "booking_id", headerName: "ID", width: 70 },
  {
    field: "hotel_title",
    headerName: "Hotel",
    width: 230,
  },
  {
    field: "hotel_city",
    headerName: "City",
    width: 250,
  },
  {
    field: "room_number",
    headerName: "Room number",
    width: 200,
  },
  {
    field: "customer_name",
    headerName: "Customer Name",
    width: 200,
  },
];
