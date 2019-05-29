const mockDataGenerator = () => {
  // Data will at be plucked randomly from.
  const random = n => Math.floor(Math.random() * n);
  const amenityProbablity = n => (Math.random() * 100) < n;
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
  const adjectives = ['Beach side', 'Cozy', 'Beautiful', 'Captivating', 'Luxurious', 'Unique', 'Quaint', 'Comfortable', 'Homey', 'Welcoming', 'Charming', 'Elegant'];
  const propisitions = ['in', 'in the heart of', 'in the center of', 'near', 'close by', 'with views of the harbor in', 'in central', 'with a 2 minute walk to central', 'with a 5 minute walk to central', 'close to lightrail station in', 'with views of Sydney Opera House from', 'on the coast of', 'near Sydney Airport in'];
  const featTraits = ['Great Location', 'Super host', 'Sparkling Clean', 'Breakfast', 'Self check-in', 'Great check-in experience'];
  const hostName = ['Angela', 'Ashley', 'Casey', 'Hailey', 'Jen', 'Lily', 'Marta', 'Sarah', 'Sasha', 'Scarlett', 'Tess', 'Alan', 'Alec', 'Chris', 'Dan', 'Harry', 'Jake', 'Matt', 'Mel', 'Paul', 'Steven'];
  const longDescription = `Quite Possibly the Best Location in Sydney!! Just moments from Sydney CBD but situated in a very quiet street. We are right behind the famous Oxford street with great restaurants and Nightlife + buses running every 3-5 minutes direct to Bondi Beach and just a short 15 Minute walk to the world famous Sydney Opera House.

The space

Stylishly furnished place featuring brand new chic designer furnishings.

Location is the best thing about my place - hundred of restaurants and shops in the area.

Nearby attractions and walking time:
  + World Square Shopping Centre - 3 min (0.3km) - has large supermarket Coles
  + Chinatown - 5 min (0.5km)
  + Central station - 5 min (0.4km)
  + Darling Harbour - 10 min (0.8km)
  + Hyde Park - 5 min (0.4km)
  + Oxford Street - 8 min (0.6km)
  + Powerhouse Museum - 13 min (1km)
  + Pitt St Mall/Westfield/Sydney Tower - 15 min (1.2km)
  + Royal Botanical Gardens entrance - 18 min (1.5km)
  + Wynyard Station - 20 min (1.7km)
  + Circular Quay/The Rocks - 25 min (2km)
  + Opera House - 30 min (2.5km)

The place comes fully furnished with everything you need for a comfortable stay, including fresh linen, blankets, towels and toiletries.`;
  // Class that will randomly select for properties.
  class Home {
    constructor(id) {
      this.id = id;
      this.hostName = hostName[random(hostName.length - 1)];
      this.bedrooms = random(6) + 1;
      this.homeType = ((bedrooms) => {
        switch (true) {
          case (bedrooms === 1):
            return `Private room in ${homeType[random(homeType.length - 1)].split(' ')[1]}`;
          case (bedrooms > 4):
            return homeType[3];
          default:
            return homeType[random(homeType.length - 1)];
        }
      })(this.bedrooms);
      this.beds = (this.homeType[0] === 'P') ? 1 : this.bedrooms + random(3);
      this.capacity = (this.homeType[0] === 'P') ? 1 : this.beds + random(3);
      this.bathrooms = (this.homeType[0] === 'P') ? random(1) + 1 : Math.max(this.bedrooms + random(4) - 2, 1);
      this.neighborhood = neighborhoods[random(neighborhoods.length - 1)];
      this.header = (this.homeType[0] === 'E') ? `${adjectives[random(adjectives.length - 1)]} ${this.bedrooms} bedroom ${this.homeType.split(' ')[1]} ${propisitions[random(propisitions.length - 1)]} ${this.neighborhood}` : `${adjectives[random(adjectives.length - 1)]} private room ${propisitions[random(propisitions.length - 1)]} ${this.neighborhood}`;
      this.primTrait = featTraits[random(2)];
      this.secondTrait = featTraits[random(2) + 2];
      this.tertTrait = featTraits[random(2) + 4];
      this.longDescription = longDescription;
      this.kitchen = (this.homeType[0] === 'P') ? amenityProbablity(70) : true;
      this.amenities = [
        { name: 'Wifi', value: amenityProbablity(98) },
        { name: 'Laptop friendly workspace', value: amenityProbablity(45) },
        { name: 'Air conditioning', value: amenityProbablity(75) },
        { name: 'Kitchen', value: this.kitchen },
        { name: 'Washer', value: (this.homeType[0] === 'P') ? amenityProbablity(70) : true },
        { name: 'Free parking on premise', value: (this.bedrooms < 4) ? amenityProbablity(30) : true },
        { name: 'Iron', value: (this.bedrooms < 4) ? amenityProbablity(90) : true },
        { name: 'Essentials', value: (this.bedrooms < 4) ? amenityProbablity(98) : true },
        { name: 'TV', value: (this.bedrooms < 4) ? amenityProbablity(95) : true },
        { name: 'Hot water', value: (this.bedrooms < 4) ? amenityProbablity(99) : true },
        { name: 'Pool', value: (this.bedrooms < 4) ? amenityProbablity(10) : true },
        { name: 'Cooking basics', value: this.kitchen },
        { name: 'Dishes and silverware', value: this.kitchen },
        { name: 'Refrigerator', value: this.kitchen },
        { name: 'Oven', value: this.kitchen },
        { name: 'Stove', value: this.kitchen },
        { name: 'Hangers', value: (this.bedrooms < 4) ? amenityProbablity(80) : true },
        { name: 'Shampoo', value: (this.bedrooms < 4) ? amenityProbablity(80) : true },
        { name: 'Extra pillow and blanket', value: (this.bedrooms < 4) ? amenityProbablity(80) : true },
        { name: 'Carbon monoxide detector', value: amenityProbablity(85) },
        { name: 'Smoke Detector', value: amenityProbablity(90) },
        { name: 'First aid kit', value: amenityProbablity(70) },
        { name: 'Fire extinguisher', value: amenityProbablity(60) },
        { name: 'Bed linens', value: (this.bedrooms < 4) ? amenityProbablity(90) : true },
        { name: 'Private entrance', value: (this.bedrooms < 4) ? false : amenityProbablity(60) },
        { name: 'Elevator', value: (this.homeType.split(' ')[1] === 'apartment') ? amenityProbablity(80) : false },
        { name: 'Hot tub', value: (this.bedrooms < 4) ? false : amenityProbablity(15) },
      ];
      delete this.kitchen;
    }
  }
  // Create Class 100 times
  const mockData = [];
  for (let id = 1; id < 101; id += 1) {
    mockData.push(new Home(id));
  }
  return mockData;
};

module.exports = mockDataGenerator();
