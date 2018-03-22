export const addProperty = (arr, obj) => {

  arr.forEach((item) => {
    item[obj.name] = obj.value;
  });
  
  return arr;
}