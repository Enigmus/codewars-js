const zeroFuel = (distanceToPump, mpg, fuelLeft) =>
    mpg * fuelLeft >= distanceToPump ? true : false;
