const congDist = "Alabama’s 2nd congressional district";
const platform = {
    taxes: "I hate taxes",
    jobs: "Create more jobs",
    infrastructure: "Build better roads",
    healthcare: "Doctors for free",
    crime: "Elimintate crime",
};
const donationURL = "http://www.givememoney.com";
const calendar = {
    events: [
        {
            event1: "Fund Raiser",
            date: "Nov 29, 2018",
            time: "5pm",
            location: "Bryant-Denny Stadium"
        },
        {
            event2: "Schmoozing Donors",
            date: "Nov 30, 2018",
            time: "5pm",
            location: "Country Club"
        },
            ]
};
const volInfo = {
    name: "Bobcat",
    address: "123 Nowhere Lane, Nowhere, USA 00000",
    email: "dontemailme@nodomain.com",
    phone: "999-000-1234",
    availability: [
        {
            day: "Monday",
            from: "9am",
            to: "12pm"
        },
        {   
            day: "Tuesday",
            from: "3pm",
            to: "7pm"
        },
    ]
};
const activities = "answering phones, polling";
let biography = "Representative Martha Roby (ROH-bee) is currently in her fourth term serving the people of Alabama’s Second Congressional District in the U.S. House of Representatives. Prior to being elected to Congress, Representative Roby worked as an attorney and served as a city councilman in her hometown of Montgomery.";
const imageGallery = {
    headShot: "imgaefile1.jpg",
    familyPhoto: "imgaefile2.jpg",
    constituentPhoto: "imgaefile2.jpg",
};
const mission = "Be a really good representative";
const voterRegURL = "http://wwww.registertovote.com";


function addImageToGallery (imageFileName) {
    
    imageGallery.newPhoto = `${imageFileName}`;
};

function changePlatform (platformKey, newText) {

   if (platformKey === "taxes") {
        platform.taxes = `${newText}`;
   } else if (platformKey === "jobs") {
        platform.jobs = `${newText}`;
   } else if (platformKey === "infrastructure") {
    platform.infrastructure = `${newText}`;
   } else if (platformKey === "healthcare") {
        platform.healthcare = `${newText}`;
   } else if (platformKey === "crime") {
    platform.crime = `${newText}`;
   }
};

function changeBio (newBio) {

    biography = `${newBio}`;
};