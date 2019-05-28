const categorizer = (list, targetObj) => {
  const results = [];
  for (let i = 0; i < list.length; i += 1) {
    if (Object.prototype.hasOwnProperty.call(targetObj, list[i])) {
      results.push({
        name: list[i],
        description: targetObj[list[i]],
      });
    }
  }
  return results;
};

export default categorizer;
