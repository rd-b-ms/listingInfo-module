
# Airbnb Listing Information Module
The goal of this project was to use React to create a clone of the Airbnb infromation module on the home listings page both in styling and fuctionality. A visiual demo of the two comparison be seen lower in this page.

## Requirments 
- Nodemon: `npm install -g nodemon`
- MongoDB: `brew install mongodb`

## Getting Started
- Install dependencies with `npm install`
- Run the server with `npm run server`
- Populate the module with randomly generated data with `npm run seed`
- Bundle the React app and run webpack with `npm run app`
- Change listing id by adding `?id=(listing # from 0-100)` to the end of the URL for example `http://localhost:3004/?id=29`

## Running the Tests
To run the test built for the module simply use `npm test`

## Built With
  **Front-End**: React  
  **Server**: Node, Express  
  **Database**: MongoDB  
  **Testing**: Jest, Enzyme, Supertest  
  **Styling**: Styled Components  

## Visual Demo
Airbnb on the left and this clone on the right.  

 <img src="https://media.giphy.com/media/gf5h875WqEELIED4SO/giphy.gif" width="800px">  
 
## API docs
`GET /listinginfo` retreives a list of all listings.
A single listing has the shape:
{
  amenities: (27) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
  bathrooms: 3
  bedrooms: 3
  beds: 4
  capacity: 4
  header: "Luxurious 3 bedroom apartment close to lightrail station in Lilyfield"
  homeType: "Entire apartment"
  hostName: "Sarah"
  id: 1
  longDescription: "Quite Possibly the Best Location in Sydney!! Just moments from Sydney CBD but situated in a very quiet street. We are right behind the famous Oxford street with great restaurants and Nightlife + buses running every 3-5 minutes direct to Bondi Beach and just a short 15 Minute walk to the world famous Sydney Opera House.↵↵The space↵↵Stylishly furnished place featuring brand new chic designer furnishings.↵↵Location is the best thing about my place - hundred of restaurants and shops in the area.↵↵Nearby attractions and walking time:↵  + World Square Shopping Centre - 3 min (0.3km) - has large supermarket Coles↵  + Chinatown - 5 min (0.5km)↵  + Central station - 5 min (0.4km)↵  + Darling Harbour - 10 min (0.8km)↵  + Hyde Park - 5 min (0.4km)↵  + Oxford Street - 8 min (0.6km)↵  + Powerhouse Museum - 13 min (1km)↵  + Pitt St Mall/Westfield/Sydney Tower - 15 min (1.2km)↵  + Royal Botanical Gardens entrance - 18 min (1.5km)↵  + Wynyard Station - 20 min (1.7km)↵  + Circular Quay/The Rocks - 25 min (2km)↵  + Opera House - 30 min (2.5km)↵↵The place comes fully furnished with everything you need for a comfortable stay, including fresh linen, blankets, towels and toiletries."
  neighborhood: "Lilyfield"
  primTrait: "Super host"
  secondTrait: "Breakfast"
  tertTrait: "Great check-in experience"
  _id: "5cf5e63c7672c59093deec3d"
}
`PUT/listinginfo` updates a single listing.
Update will first take in the identifier:
{id: 29}
Next it takes in the change:
{hostName: tom}
`DELETE/listinginfo` delete will delete a single listin.
Delete takes in a single paramiter which is the identifier:
{id: 29}
`POST/listinginfo` inserts all of the generated data.
Insert takes in a single paramiter which is the data to be inserted into the database:
[{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]