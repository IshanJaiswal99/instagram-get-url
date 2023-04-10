const instagramGetUrl = require("./index");

async function test(url) {
  try {
    let result = await instagramGetUrl(url);
    console.log(result);
    return result;
  } catch (error) {
    console.log(error);
  }
}

// Image
test("https://www.instagram.com/p/CqUsjnHPXsJ/");

//Reel
test("https://www.instagram.com/reel/CdmYaq3LAYo/");

// Videos
test("https://www.instagram.com/p/CqUuR5Yv_Jv/");
