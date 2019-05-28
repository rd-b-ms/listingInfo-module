// provides each trait with a description and superhosts with the host name.
export const traitCreator = (trait, hostname) => {
  switch (trait) {
    case 'Great Location':
      return ['Great Location', '95% of recent guests gave the location a 5-star rating.'];
    case 'Super host':
      // for superhost adds name infront
      return [`${hostname} is a Superhost`, 'Superhosts are experienced, highly rated hosts who are committed to providing great stays for guests.'];
    case 'Sparkling Clean':
      return ['Sparkling clean', '15 recent guests said this place was sparkling clean.'];
    case 'Breakfast':
      return ['Breakfast', 'This is one of a few places in the area that has this feature.'];
    case 'Great check-in experience':
      return ['Great check-in experience', '90% of recent guests gave the check-in process a 5-star rating.'];
    case 'Self check-in':
      return ['Self check-in', 'Check yourself in with the lockbox.'];
    default: return null;
  }
};

export const basicCategory = {
  Wifi: 'Continuous access in the listing',
  'Air conditioning': null,
  'Laptop friendly workspace': 'A table or desk with space for a laptop and a chair that’s comfortable to work in',
  Iron: null,
  Essentials: 'Towels, bed sheets, soap, and toilet paper',
  TV: null,
  Washer: null,
  'Hot water': null,
};

export const facilitiesCategory = {
  'Free parking on premise': null,
  'Private entrance': null,
  Pool: 'Private or Shared',
  Elevator: 'The home or building has an elevator that’s at least 52 inches deep and a doorway at least 32 inches wide.',
  'Hot tub': null,
};

export const diningCategory = {
  Kitchen: 'Space where guests can cook their own meals',
  'Cooking basics': 'Pots and pans, oil, salt and pepper',
  'Dishes and silverware': null,
  Microwave: null,
  Refrigerator: null,
  Oven: null,
  Stove: null,
};

export const bnBCategory = {
  'Hair dryer': null,
  Hangers: null,
  Shampoo: null,
  'Bed linens': null,
  'Extra pillows and blankets': null,
};

export const safetyCategory = {
  'Carbon monoxide detector': null,
  'Smoke Detector': null,
  'First aid kit': null,
  'Fire extinguisher': null,
};

export const rareAmenitys = ['Free parking on premise', 'Air conditioning', 'Laptop friendly workspace', 'Elevator']