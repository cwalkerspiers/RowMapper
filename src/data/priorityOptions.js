import { priorities } from "/src/constants";

const priorityOptions = Object.keys(priorities).map(priorityKey => {
  let priority = priorities[priorityKey];
  return {
    value: priority,
    label: priority
  };
});

export default priorityOptions;
