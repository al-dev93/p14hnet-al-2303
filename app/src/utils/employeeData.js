const employeeData = [
  {
    title: "First Name",
    data: "firstName",
    type: "text",
    isRequired: "required",
  },
  {
    title: "Last Name",
    data: "lastName",
    type: "text",
    isRequired: "required",
  },
  { title: "Date of Birth", data: "dateOfBirth", type: "date" },
  { title: "Start Date", data: "startDate", type: "date" },
  { title: "Street", data: "street", type: "text" },
  { title: "City", data: "city", type: "text" },
  { title: "State", data: "state", type: "list" },
  { title: "Zip Code", data: "zipCode", type: "number" },
  { title: "Department", data: "department", type: "list" },
];

export const orderTable = [
  "firstName",
  "lastName",
  "startDate",
  "department",
  "dateOfBirth",
  "street",
  "city",
  "state",
  "zipCode",
];

export default employeeData;
