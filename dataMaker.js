

const fs = require('fs');

const faker = require('faker');

const writer = fs.createWriteStream('data3.csv');
let count = 0;
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
        randomBoolean[Math.floor(Math.random() * randomBoolean.length)],
        randomBoolean[Math.floor(Math.random() * randomBoolean.length)],
        randomBoolean[Math.floor(Math.random() * randomBoolean.length)],
        randomBoolean[Math.floor(Math.random() * randomBoolean.length)],
        randomBoolean[Math.floor(Math.random() * randomBoolean.length)],
        randomBoolean[Math.floor(Math.random() * randomBoolean.length)],
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

// Bathrooms: fakeNumber,
// Bedrooms: fakeNumber,
// Beds: fakeNumber,
// Headers: fakeSentence,
// hometype: homeType[Math.floor(Math.random() * homeType.length)],
// hostName
// id: count += 1,
// longDescription: fakeSentence,
// neighborhood: neighborhoods[Math.floor(Math.random() * neighborhoods.length)],
// PrimTrait: fakeSentence,
// Wifi: randomBoolean[Math.floor(Math.random() * randomBoolean.length)],
// Laptop_friendly_workspace: randomBoolean[Math.floor(Math.random() * randomBoolean.length)],
// Air_conditioning: randomBoolean[Math.floor(Math.random() * randomBoolean.length)],
// Kitchen: randomBoolean[Math.floor(Math.random() * randomBoolean.length)],
// Washer: randomBoolean[Math.floor(Math.random() * randomBoolean.length)],
// Free_parking_on_premise: randomBoolean[Math.floor(Math.random() * randomBoolean.length)],
// Iron: randomBoolean[Math.floor(Math.random() * randomBoolean.length)],
// Essentials: randomBoolean[Math.floor(Math.random() * randomBoolean.length)],
// Tv: randomBoolean[Math.floor(Math.random() * randomBoolean.length)],
// Hot_water: randomBoolean[Math.floor(Math.random() * randomBoolean.length)],
// Pool: randomBoolean[Math.floor(Math.random() * randomBoolean.length)],
// Cooking_basics: randomBoolean[Math.floor(Math.random() * randomBoolean.length)],
// Dishes_and_silverware: randomBoolean[Math.floor(Math.random() * randomBoolean.length)],
// Refrigerator: randomBoolean[Math.floor(Math.random() * randomBoolean.length)],
// Oven: randomBoolean[Math.floor(Math.random() * randomBoolean.length)],
// Stove: randomBoolean[Math.floor(Math.random() * randomBoolean.length)],
// Hangers: randomBoolean[Math.floor(Math.random() * randomBoolean.length)],
// Shampoo: randomBoolean[Math.floor(Math.random() * randomBoolean.length)],
// Extra_pillow_and_blanket: randomBoolean[Math.floor(Math.random() * randomBoolean.length)],
// Carbon_monoxide_detector: randomBoolean[Math.floor(Math.random() * randomBoolean.length)],
// Smoke_Detector: randomBoolean[Math.floor(Math.random() * randomBoolean.length)],
// First_aid_kit: randomBoolean[Math.floor(Math.random() * randomBoolean.length)],
// Bed_linens: randomBoolean[Math.floor(Math.random() * randomBoolean.length)],
// Private_entrance: randomBoolean[Math.floor(Math.random() * randomBoolean.length)],
// Elevator: randomBoolean[Math.floor(Math.random() * randomBoolean.length)],
// Hot_tub: randomBoolean[Math.floor(Math.random() * randomBoolean.length)],

// const dataMaker = () => {
//   // writer.pipe(fs.createWriteStream('data.csv'));
//   for (let i = 0; i < 10000000; i += 1) {
//     writer.write({
//       Bathrooms: fakeNumber,
//       Bedrooms: fakeNumber,
//       Beds: fakeNumber,
//       Headers: fakeSentence,
//       hometype: homeType[Math.floor(Math.random() * homeType.length)],
//       id: count += 1,
//       longDescription: fakeSentence,
//       neighborhood: neighborhoods[Math.floor(Math.random() * neighborhoods.length)],
//       PrimTrait: fakeSentence,
//       Wifi: randomBoolean[Math.floor(Math.random() * randomBoolean.length)],
//       Laptop_friendly_workspace: randomBoolean[Math.floor(Math.random() * randomBoolean.length)],
//       Air_conditioning: randomBoolean[Math.floor(Math.random() * randomBoolean.length)],
//       Kitchen: randomBoolean[Math.floor(Math.random() * randomBoolean.length)],
//       Washer: randomBoolean[Math.floor(Math.random() * randomBoolean.length)],
//       Free_parking_on_premise: randomBoolean[Math.floor(Math.random() * randomBoolean.length)],
//       Iron: randomBoolean[Math.floor(Math.random() * randomBoolean.length)],
//       Essentials: randomBoolean[Math.floor(Math.random() * randomBoolean.length)],
//       Tv: randomBoolean[Math.floor(Math.random() * randomBoolean.length)],
//       Hot_water: randomBoolean[Math.floor(Math.random() * randomBoolean.length)],
//       Pool: randomBoolean[Math.floor(Math.random() * randomBoolean.length)],
//       Cooking_basics: randomBoolean[Math.floor(Math.random() * randomBoolean.length)],
//       Dishes_and_silverware: randomBoolean[Math.floor(Math.random() * randomBoolean.length)],
//       Refrigerator: randomBoolean[Math.floor(Math.random() * randomBoolean.length)],
//       Oven: randomBoolean[Math.floor(Math.random() * randomBoolean.length)],
//       Stove: randomBoolean[Math.floor(Math.random() * randomBoolean.length)],
//       Hangers: randomBoolean[Math.floor(Math.random() * randomBoolean.length)],
//       Shampoo: randomBoolean[Math.floor(Math.random() * randomBoolean.length)],
//       Extra_pillow_and_blanket: randomBoolean[Math.floor(Math.random() * randomBoolean.length)],
//       Carbon_monoxide_detector: randomBoolean[Math.floor(Math.random() * randomBoolean.length)],
//       Smoke_Detector: randomBoolean[Math.floor(Math.random() * randomBoolean.length)],
//       First_aid_kit: randomBoolean[Math.floor(Math.random() * randomBoolean.length)],
//       Bed_linens: randomBoolean[Math.floor(Math.random() * randomBoolean.length)],
//       Private_entrance: randomBoolean[Math.floor(Math.random() * randomBoolean.length)],
//       Elevator: randomBoolean[Math.floor(Math.random() * randomBoolean.length)],
//       Hot_tub: randomBoolean[Math.floor(Math.random() * randomBoolean.length)],
//     });
//     if (i % 10000 === 0) {
//       console.log(i);
//     }
//   }
//   writer.end();
//   console.log('done');
// };
// dataMaker();
