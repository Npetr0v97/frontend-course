const searchInput = document.querySelector("input");
const searchButton = document.querySelector("button");

const mainSection = document.querySelector("section");

//clear body

//populate body with pictures of tv shows

const getTvShows = async function (searchParam) {
  try {
    //getting the tv shows
    const response = await axios.get(
      `https://api.tvmaze.com/search/shows?q=${searchParam}`
    );
    const imgArray = await response.data;
    console.log(imgArray, imgArray.length, imgArray[0].show.image);

    //setting up the html
    let rowDiv = document.createElement("div");
    rowDiv.classList.add("row", "mb-5");
    let images = "";

    //creating the element which contains the images

    if (imgArray.length != 0) {
      imgArray.forEach((el) => {
        images += `<div class="col-2 mb-5"><img
  src="${
    el.show.image != null
      ? el.show.image.original
      : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMj5VzCmftQskQHz4SnX-yvkpNP8vN3ZRa6ppgBCt38A&s"
  }"
  alt="${el.show.name}"
  class="img-fluid px-0 py-0 img-thumbnail shadow"
  style ="width:100%; height:90%; box-sizing:content-box"
  /></div>`;
      });
    }

    rowDiv.innerHTML = images;
    //clearing the previous images

    //adding the new images
    mainSection.appendChild(rowDiv);

    /* <div class="col-2 mb-5"><img
  src="https://t2.genius.com/unsafe/340x340/https%3A%2F%2Fimages.genius.com%2F5c177ffe140687bcb7ca127b69b69531.1000x1000x1.jpg"
  alt="Image"
  class="img-fluid px-2"
  /></div> */
  } catch (e) {
    console.error(e);
  }
};

searchButton.addEventListener("click", () => {
  mainSection.innerHTML = "";
  getTvShows(searchInput.value);
});
