export const dateFormater = (date) => {
  var inputDate = new Date(date);

  var year = inputDate.getFullYear();
  var month = inputDate.getMonth() + 1;
  var day = inputDate.getDate();

  var formattedDate =
    year +
    "/" +
    (month < 10 ? "0" : "") +
    month +
    "/" +
    (day < 10 ? "0" : "") +
    day;

  return formattedDate;
};
