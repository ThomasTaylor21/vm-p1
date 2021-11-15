//console.log("MARS");
//on page load fucntion that gets all photos
// have list of images
//send list ti HTMLAllCollection
const selector = document.querySelector("photo-selector");
async function getAllPhotos() {

  const res = await axios.get("https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=2nD1sHhCwt8e8nkf7URbS9XbCa4loKkx9rGhrLex");
  console.log(res.data);
  setOptionValues(list);

}
{
  function getAllPhotos();
  function setOptionValues(list) {
    console.log(photos);
  }
  photos.forEach(photos); {
    let option = document.createElement("option");
    option.value = photos;
    option.textContent = photo;
    selector.appendChild(option);
  };

  // save for later...
  // async function getImage() {

  try {
    randomBtn.addEventListener("click", getRandomPics);
    const randomUrl = new URL('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=2nD1sHhCwt8e8nkf7URbS9XbCa4loKkx9rGhrLex');
    const res = await axios.get(RandomPics);
    let getImage = res.data.message;
    parseImage([img]);
    displayImage(img);

  } catch (err) {
    console.log(err);
  } finally {
    console.log("done");
  }
}
function parseImage(str) {
  let arr = str.split("/");
  console.log(arr[7]);

}


// console.log(image);
// getImage()
// try {

// } catch (error) {
//   console.log(err)

// }
// {
//   let request = new Object.keys.res();
//   request.open.getImage = URL('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=2nD1sHhCwt8e8nkf7URbS9XbCa4loKkx9rGhrLex');
// }



// }
// const word = ['FHAZ'];
// let word = word.filter(string.length);
// {
//   if (word.includes("FHAZ")) {

//     return word;
//   }
  // let Url = (https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=2nD1sHhCwt8e8nkf7URbS9XbCa4loKkx9rGhrLex");
  // fetch(Url).then(response => {
  // return response.json();
  // .then(res.data = $('getImage')}


  // Work with JSON data here
  // console.log(res.data)
  // catch (err){
//   // console.log(err)

// }

