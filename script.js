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
getImage()
