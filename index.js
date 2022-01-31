function scuberGreetingForFeet(rideDistance){
  if (rideDistance < 400)
  {return "This one is on me!"};
  if (rideDistance < 2500)
  {return "I will gladly take your thirty bucks."};
  if (rideDistance > 2500);{return "No can do."};
  // Write your code here!

}

function ternaryCheckCity(city){
  return city === "NYC"? "Ok, sounds good.":"No go.";
  // Write your code here!
}

function switchOnCharmFromTip(tip){
  // Write your code here!
  switch (tip){
    case 'generous':
      return 'Thank you so much.'
    case 'not as generous': 
      return 'Thank you.'
    default:
      return 'Bye.'
  };
}