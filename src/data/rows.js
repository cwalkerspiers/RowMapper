import { columnIds, priorities } from "/src/constants.js";
console.log(columnIds);
const rows = [
  {
    [columnIds.task]: "Update style guide",
    [columnIds.priority]: priorities[1]
  },
  {
    [columnIds.task]: "Refactor code",
    [columnIds.priority]: priorities[3]
  },
  {
    [columnIds.task]: "Release and deploy feature 407",
    [columnIds.priority]: priorities[1]
  }
];

export default rows;
