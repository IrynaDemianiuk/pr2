const translateMinutesToHours = (minutesCount) => {
    const hours = Math.floor(minutesCount / 60);
    const minutes = minutesCount - hours * 60;
  
    return {
      hours,
      minutes,
    };
};


export {
    translateMinutesToHours
}