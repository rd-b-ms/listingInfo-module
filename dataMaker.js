

const fs = require('fs');

const faker = require('faker');

const writer = fs.createWriteStream('listingData.csv');
let count = 1;
const neighborhoods = ['Alexandria',
  'Annandale',
  'Avalon',
  'Balmain',
  'Bondi',
  'Bondi Beach',
  'Bondi Junction',
  'Bronte',
  'Chatswood',
  'Chippendale',
  'Clovelly',
  'Coogee',
  'Cronulla',
  'Darlinghurst',
  'Double Bay',
  'Elizabeth Bay',
  'Forrest Lodge',
  'Glebe',
  'Haymarket',
  'Kirribilli',
  'Lane Cove',
  'Lilyfield',
  'Manly',
  'Maroubra',
  'Marrickville',
  'Millers Point',
  'Mosman',
  'Newtown',
  'Paddington',
  'Palm Beach',
  'Potts Point',
  'Pyrmont',
  'Randwick',
  'Redfern',
  'Rose Bay',
  'Surry Hills',
  'Tamarama',
  'The Rocks',
  'Ultimo',
  'Vaucluse',
  'Waterloo',
  'Wollstonecraft',
  'Woolloomooloo',
];
const homeType = ['Entire apartment', 'Entire condomninium', 'Entire townhouse', 'Entire house'];
const fakeSentence = faker.lorem.sentences(1);
const randomNumber = [1, 2, 3, 4, 5, 6, 7, 8];
const randomBoolean = [true, false];
const hostName = ['Angela', 'Ashley', 'Casey', 'Hailey', 'Jen', 'Lily', 'Marta', 'Sarah', 'Sasha', 'Scarlett', 'Tess', 'Alan', 'Alec', 'Chris', 'Dan', 'Harry', 'Jake', 'Matt', 'Mel', 'Paul', 'Steven'];
const featTraits = ['Great Location', 'Super host', 'Sparkling Clean', 'Breakfast', 'Self check-in', 'Great check-in experience'];
function dataMaker(writer) {
  let i = 10000001;
  function write() {
    let ok = true;
    do {
      const data = [
        randomNumber[Math.floor(Math.random() * randomNumber.length)],
        randomNumber[Math.floor(Math.random() * randomNumber.length)],
        randomNumber[Math.floor(Math.random() * randomNumber.length)],
        randomNumber[Math.floor(Math.random() * randomNumber.length)],
        fakeSentence,
        homeType[Math.floor(Math.random() * homeType.length)],
        hostName[Math.floor(Math.random() * hostName.length)],
        count += 1,
        fakeSentence,
        neighborhoods[Math.floor(Math.random() * neighborhoods.length)],
        featTraits[Math.floor(Math.random() * featTraits.length)],
        featTraits[Math.floor(Math.random() * featTraits.length)],
        featTraits[Math.floor(Math.random() * featTraits.length)],
        randomBoolean[Math.floor(Math.random() * randomBoolean.length)],
        randomBoolean[Math.floor(Math.random() * randomBoolean.length)],
        true,
        true,
        randomBoolean[Math.floor(Math.random() * randomBoolean.length)],
        randomBoolean[Math.floor(Math.random() * randomBoolean.length)],
        true,
        randomBoolean[Math.floor(Math.random() * randomBoolean.length)],
        randomBoolean[Math.floor(Math.random() * randomBoolean.length)],
        randomBoolean[Math.floor(Math.random() * randomBoolean.length)],
        randomBoolean[Math.floor(Math.random() * randomBoolean.length)],
        randomBoolean[Math.floor(Math.random() * randomBoolean.length)],
        randomBoolean[Math.floor(Math.random() * randomBoolean.length)],
        randomBoolean[Math.floor(Math.random() * randomBoolean.length)],
        randomBoolean[Math.floor(Math.random() * randomBoolean.length)],
        randomBoolean[Math.floor(Math.random() * randomBoolean.length)],
        randomBoolean[Math.floor(Math.random() * randomBoolean.length)],
        randomBoolean[Math.floor(Math.random() * randomBoolean.length)],
        randomBoolean[Math.floor(Math.random() * randomBoolean.length)],
        randomBoolean[Math.floor(Math.random() * randomBoolean.length)],
        randomBoolean[Math.floor(Math.random() * randomBoolean.length)],
        randomBoolean[Math.floor(Math.random() * randomBoolean.length)],
        randomBoolean[Math.floor(Math.random() * randomBoolean.length)],
        randomBoolean[Math.floor(Math.random() * randomBoolean.length)],
        true,
        randomBoolean[Math.floor(Math.random() * randomBoolean.length)],
      ];
      const totalData = `${data.join()}\n`;
      i -= 1;
      if (i % 10000 === 0) {
        console.log(i);
      }
      if (i === 0) {
        writer.write(totalData);
      } else {
        ok = writer.write(totalData);
      }
    } while (i > 0 && ok);
    if (i > 0) {
      writer.once('drain', write);
    }
  }
  write();
}
dataMaker(writer);
