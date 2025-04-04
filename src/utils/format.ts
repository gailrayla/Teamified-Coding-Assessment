export const formatDate = (dateString: string): string => {
  let dateObj;

  if (dateString.includes("/")) {
    const [day, month, year] = dateString.split("/");
    dateObj = new Date(`${year}-${month}-${day}`);
  } else {
    dateObj = new Date(dateString);
  }

  if (isNaN(dateObj.getTime())) {
    console.error("Invalid date:", dateString);
    return "Invalid Date";
  }

  const options: Intl.DateTimeFormatOptions = {
    weekday: "long",
    day: "2-digit",
    month: "long",
    year: "numeric",
  };

  return dateObj.toLocaleDateString(undefined, options);
};
