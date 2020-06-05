const getSleepHours = (day) => {
    if(day === 'monday'){
      return 8
    }
    else if(day === 'tuesday'){
      return 3
    }
    else if(day === 'wednesday'){
      return 6
    }
    else if(day === 'thursday'){
      return 4
  
    }
    else if(day === 'friday'){
      return 8
    }
    else if(day === 'saturday'){
      return 8
    }
    else if(day === 'sunday'){
      return 8
    }
    else{
      console.log("Has to be a weekday")
    }
  }
  
  const getActualSleepHours = () => {
    return getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday')
  }
  
  const getIdealSleepHours = () =>{
    var IdealHours = 4
    return IdealHours * 7
  }
  
  const calculateSleepDebt = () =>{
    var actualSleepHours = getActualSleepHours()
    var idealSleepHours = getIdealSleepHours()
    if(actualSleepHours === idealSleepHours){
      console.log('You have perfect amount of sleep')
    }
    else if(actualSleepHours > idealSleepHours){
      console.log('You got more sleep than needed')
    }
    else if(actualSleepHours < idealSleepHours){
      console.log('You need to get some rest')
    }
  }
  
  calculateSleepDebt()