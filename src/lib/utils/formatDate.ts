export const formatDate = (date: string) => {
  const newDate = new Intl.DateTimeFormat('en-us', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(new Date(date));
  return newDate;
};
