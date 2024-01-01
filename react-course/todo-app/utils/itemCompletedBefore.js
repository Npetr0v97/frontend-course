export default function itemCompletedBefore(timeInMilliseconds) {
  // console.log(timeInMilliseconds);
  const itemCompletedBeforeMinutes =
    (new Date().getTime() - timeInMilliseconds) / 60000;
  let result;
  switch (true) {
    case itemCompletedBeforeMinutes < 60:
      result = "less than 1h ago";
      break;
    case itemCompletedBeforeMinutes >= 60 && itemCompletedBeforeMinutes < 1440:
      result = `${Math.floor(itemCompletedBeforeMinutes / 60, 1)}h ago`;
      break;
    case itemCompletedBeforeMinutes >= 1440:
      result = `${Math.floor(itemCompletedBeforeMinutes / 1440, 1)}d ago`;
      break;
  }

  return result;
}
