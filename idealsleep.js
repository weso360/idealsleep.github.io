let getSleepHours = day => {
    switch(day){
      case 'monday':
      return 9
      break;
      case 'tuesday':
      return 8
      break;
      case 'wednesday':
      return 10
      break;
      case 'thursday':
      return 7
      break;
      case 'friday':
      return 8
      break;
      case 'saturday':
      return 10
      break;
      case 'sunday':
      return 8
      break;
      default:
      return 'Invalid input'
      break;
    }
    }
    
    const getActualSleepHours = () => {
      let result = getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday');
      return result
    }
    console.log(
      `This week you had ${getActualSleepHours()}-hrs of sleep`)
    
    const getIdealSleepHours = () => {
      let idealHours = 9;
        return idealHours * 7;
      
    }
    console.log(`
    You should be getting atleast ${getIdealSleepHours()}-hrs of sleep per week
    `)
    
    
    const calculateSleepDept = () => {
      const actualSleepHours = getActualSleepHours();
      const idealSleepHours = getIdealSleepHours();
      if(actualSleepHours === idealSleepHours){
        console.log('You got the perfect amount of sleep this week. - Well Done!');
      }
    if(actualSleepHours > idealSleepHours){
      console.log(`You have sleep more that the recomended requirement this week, by ${ actualSleepHours - idealSleepHours} hours.`)
    }
    if(actualSleepHours < idealSleepHours){
      console.log(`You have underslept by ${ idealSleepHours - actualSleepHours} hours this week, Try and get more rest!`)
    }
    };
    calculateSleepDept()
    
    