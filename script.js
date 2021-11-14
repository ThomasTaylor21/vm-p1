//console.log("MARS");


async function getImage() {
  try {
    const res = await axios.get('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=2nD1sHhCwt8e8nkf7URbS9XbCa4loKkx9rGhrLex');


    const list = Object.keys(res.data);
    console.log(res)
    console.log(list)
    setOptionValues(list);
  }

  catch (err) {
    console.log(err);
  } finally {
    console.log("done");
  }
}


console.log(words);
getImage()
try {

} catch (error) {
  console.log(err)

}
{
  let request = new Object.keys.res();
  request.open.getImage = URL('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=2nD1sHhCwt8e8nkf7URbS9XbCa4loKkx9rGhrLex');
}

function prefixString(word) {
  return function (string) {
    return `${prefix}${string}`
  }

}
const word = ['FHAZ'];
let word = word.filter(string.length);
{
  if (word.includes("FHAZ")) {

    return word;
  }
  // let Url = (https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=2nD1sHhCwt8e8nkf7URbS9XbCa4loKkx9rGhrLex");
  // fetch(Url).then(response => {
  // return response.json();
  // .then(res.data = $('getImage')}


  // Work with JSON data here
  // console.log(res.data)
  // catch (err){
  // console.log(err)

}

