export const handleAscOrder = (arr, key) => {
  return arr.sort((a, b) => a[key] - b[key]);
};

export const handleDescOrder = (arr, key) => {
  return arr.sort((a, b) => b[key] - a[key]);
};

export const pagination = (displayedContent = [], itemsNum, pageNum) => {
  const count = Math.ceil(displayedContent?.length / itemsNum);
  const startIndex = (pageNum - 1) * itemsNum;
  const requiredArr = displayedContent.slice(startIndex, startIndex + itemsNum);
  return { count, requiredArr };
};
