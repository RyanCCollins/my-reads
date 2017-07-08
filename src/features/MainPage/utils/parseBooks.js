function groupBy(array, func) {
  const groups = {};
  array.forEach((item) => {
    const group = func(item);
    groups[group] = groups[group] || [];
    groups[group].push(item);
  });
  return groups;
}

export default (results) => {
  const getShelf = book => book.shelf;
  return Promise.resolve(groupBy(results, getShelf));
};
