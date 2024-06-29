function regCheck(registrationNumber, provinceCode) {
    return registrationNumber.endsWith(provinceCode);
  }
  // True cases
  console.log(regCheck('RG 45 HN GP', 'GP'));   // true
  console.log(regCheck('LKG 679 EC', 'EC'));    // true
  console.log(regCheck('GHT 456 MP', 'MP'));    // true
  console.log(regCheck('FGT 491 L', 'L'));      // true
  
  // False cases
  console.log(regCheck('ND 123-456', 'GP'));    // false
  console.log(regCheck('CY 678-453', 'EC'));    // false
  console.log(regCheck('CA 1234-123', 'MP'));   // false