let raceNumber = Math.floor(Math.random() * 1000);
const registeredEarly= false;
let runnerAge=18;
if (runnerAge>18 && registeredEarly){raceNumber+=1000;
}
if (runnerAge>18 && registeredEarly){console.log('Race starts at 9.30 am, Race number ' +raceNumber)
} else if (runnerAge>18 && !registeredEarly){ 
  console.log('Race starts at 11.00 am, Race number ' +raceNumber)
} else if (runnerAge<18){console.log('Race starts at 12.30 PM, race number '+ raceNumber)
} else {console.log('Please see the registration desk')};


