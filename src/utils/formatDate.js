/** Get formatted date string. */
export default function formatDate(date) {
  const formatter = new Intl.DateTimeFormat('en-GB', {
    day: 'numeric',
    month: 'long',
    timeZone: 'Europe/London',
    weekday: 'long',
    year: 'numeric',
  });

  return formatter.format(date);
}
