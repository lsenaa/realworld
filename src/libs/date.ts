export const convertDate = (articleDate: string) => {
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const date = new Date(articleDate);
  const year = date.getFullYear();
  const month = monthNames[date.getMonth()];
  const day = String(date.getDate());

  return `${month} ${day}, ${year}`;
};
