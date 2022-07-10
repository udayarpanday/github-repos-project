//sorting options const
export const sortingOptions = [
  { value: { sort: "stars", order: "desc" }, label: "Most stars" },
  { value: { sort: "stars", order: "asc" }, label: "Fewest stars" },
  { value: { sort: "forks", order: "desc" }, label: "Most forks" },
  { value: { sort: "forks", order: "asc" }, label: "Fewest forks" },
  { value: { sort: "updated", order: "desc" }, label: "Recently updated" },
  { value: { sort: "updated", order: "asc" }, label: "Least recently updated" },
];

//items per page options const
export const itemsPerPage = [
  { value: 5, label: "5" },
  { value: 10, label: "10" },
  { value: 25, label: "25" },
  { value: 50, label: "50" },
];