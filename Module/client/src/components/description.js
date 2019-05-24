// provides each trait with a description and superhosts with the host name.
const descriptionCreator = (trait, hostname) => {
  switch (trait) {
    case 'Great Location':
      return ['Great Location', '95% of recent guests gave the location a 5-star rating.'];
    case 'Super host':
      // for superhost adds name infront
      return [`${hostname} is a Superhost`, 'Superhosts are experienced, highly rated hosts who are committed to providing great stays for guests.'];
    case 'Sparking Clean':
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

export default descriptionCreator;
