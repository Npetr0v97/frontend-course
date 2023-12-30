export function extractContent(text) {

    return text.slice(0, text.lastIndexOf("-") - 1);
}

export function extractAuthor(text) {

    return text.slice(
        (text.length - text.lastIndexOf("-") - 1) * -1
      );
}

export function onClickIndexChanger(currentIndex, arrLength, setIndex) {
    if (currentIndex < arrLength - 1) {
        setIndex((prevState) => prevState + 1);
      } else {
        setIndex(0);
      }
}