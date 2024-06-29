function isDayName (day) {
    var validDayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return validDayNames.includes(day);
  }
  function isWeekday(day) {
    if (!isDayName(day)) {
      return false; 
    }
    return day !== 'Saturday' && day !== 'Sunday';
  }