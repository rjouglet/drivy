'use strict';

//list of cars
//useful for ALL exercises
var cars = [{
  'id': 'p306',
  'vehicule': 'peugeot 306',
  'pricePerDay': 20,
  'pricePerKm': 0.10
}, {
  'id': 'rr-sport',
  'pricePerDay': 60,
  'pricePerKm': 0.30
}, {
  'id': 'p-boxster',
  'pricePerDay': 100,
  'pricePerKm': 0.45
}];

//list of rentals
//useful for ALL exercises
//The `price` is updated from exercice 1
//The `commission` is updated from exercice 3
//The `options` is useful from exercice 4
var rentals = [{
  'id': '1-pb-92',
  'driver': {
    'firstName': 'Paul',
    'lastName': 'Bismuth'
  },
  'carId': 'p306',
  'pickupDate': '2016-01-02',
  'returnDate': '2016-01-02',
  'distance': 100,
  'options': {
    'deductibleReduction': false
  },
  'price': 0,
  'commission': {
    'insurance': 0,
    'assistance': 0,
    'drivy': 0
  }
}, {
  'id': '2-rs-92',
  'driver': {
    'firstName': 'Rebecca',
    'lastName': 'Solanas'
  },
  'carId': 'rr-sport',
  'pickupDate': '2016-01-05',
  'returnDate': '2016-01-09',
  'distance': 300,
  'options': {
    'deductibleReduction': true
  },
  'price': 0,
  'commission': {
    'insurance': 0,
    'assistance': 0,
    'drivy': 0
  }
}, {
  'id': '3-sa-92',
  'driver': {
    'firstName': ' Sami',
    'lastName': 'Ameziane'
  },
  'carId': 'p-boxster',
  'pickupDate': '2015-12-01',
  'returnDate': '2015-12-15',
  'distance': 1000,
  'options': {
    'deductibleReduction': true
  },
  'price': 0,
  'commission': {
    'insurance': 0,
    'assistance': 0,
    'drivy': 0
  }
}];

//list of actors for payment
//useful from exercise 5
var actors = [{
  'rentalId': '1-pb-92',
  'payment': [{
    'who': 'driver',
    'type': 'debit',
    'amount': 0
  }, {
    'who': 'owner',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'insurance',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'assistance',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'drivy',
    'type': 'credit',
    'amount': 0
  }]
}, {
  'rentalId': '2-rs-92',
  'payment': [{
    'who': 'driver',
    'type': 'debit',
    'amount': 0
  }, {
    'who': 'owner',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'insurance',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'assistance',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'drivy',
    'type': 'credit',
    'amount': 0
  }]
}, {
  'rentalId': '3-sa-92',
  'payment': [{
    'who': 'driver',
    'type': 'debit',
    'amount': 0
  }, {
    'who': 'owner',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'insurance',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'assistance',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'drivy',
    'type': 'credit',
    'amount': 0
  }]
}];


function Price(cars, rentals)
{
	for (var i=0; rentals.length < i;++i)
	{	
		var CarofRental = getCarsbyId(cars, rentals(i), car(Id));
		var ReturnDate = new Date (rentals[id].pickupDate);
		var PickupDate = new Date (rentals[id].returnDate);
		var nbDays = 1+ (ReturnDate.getDay() - PickupDate.getDay());
		
		var Time = nbDays * CarofRental.pricePerDay;
		var Distance = rentals[i].distance * CarofRental.pricePerKm;
		
		//exercise 2 start
		if (nbDays > 10)
		{
			pricePerDay *= 0.5;
		}
		
		else if (nbDays > 4)
		{
			pricePerDay *= 0.7;
		}
		
		else if (nbDays > 1)
		{
			pricePerDay *= 0.9;
		}
		//exercise 2 end
		
		rentals[i].price = Time + Distance;
		
		//exercise 3 start
		var commission = rentals[i].price * 0.3;
		rentals[i].commission.assistance = nbDays;
		rentals[i].commission.insurance = commission / 2;
		rentals[i].commission.drivy = rentals[i].price - (rentals[i].commission.insurance + rentals[i].commission.assistance);
		//exercise 3 end
		
		//exercise 4 start
		var deductible = 4 * nbDays;
		if(deductibleReduction = true)
		{
			rentals[i].price = deductible + rentals[i].price;
		}
				
		//exercise 4 end
		console.log(nbDays);
		console.log(rental[i].price);
		
	}
	
}


function getCarsbyId(cars, Id)
{
	for (var c in cars)
		{
			if(cars[c].id == Id)
				return cars[c];
		}
	return;
}

//list of rental modifcation
//useful for exercise 6
var rentalModifications = [{
  'rentalId': '1-pb-92',
  'returnDate': '2016-01-04',
  'distance': 150
}, {
  'rentalId': '3-sa-92',
  'pickupDate': '2015-12-05'
}];

console.log(cars);
console.log(rentals);
Price(cars, rentals);
console.log(rentals);

console.log(actors);
console.log(rentalModifications);

