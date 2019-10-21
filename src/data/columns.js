import priorityOptions from "/src/data/priorityOptions";

const columns = [
  {
    id: "Task",
    type: "input"
  },
  {
    id: "Priority",
    type: "select",
    options: priorityOptions
  }
];

export default columns;
