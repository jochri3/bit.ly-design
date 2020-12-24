import URLShortener from './URLShortener';

const shortURLSDatabse: Map<string,string> = new Map();


// Creataion of short URLs
const kda = URLShortener.createShortURL(
  'https://kinsahasadigital.academy',
  shortURLSDatabse
);
const kd = URLShortener.createShortURL(
  'https://kinsahasadigital.com',
  shortURLSDatabse
);
const udemy = URLShortener.createShortURL(
  'https://udemy.com',
  shortURLSDatabse
);


//Retreiving short URLs
console.log("---Retrieving long URLs from Short Urls")
console.log(`${kda} : `,URLShortener.retreiveURL(kda, shortURLSDatabse));
console.log(`${kd} : `,URLShortener.retreiveURL(kd, shortURLSDatabse));
console.log(`${udemy} : `,URLShortener.retreiveURL(udemy, shortURLSDatabse));
console.log('http://www.toto.cd : ',URLShortener.retreiveURL('http://www.toto.cd', shortURLSDatabse));

