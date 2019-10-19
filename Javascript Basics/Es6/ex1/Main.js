class Park {
    constructor(name, age, trees, area) {
        this.name = name;
        this.age = age;
        this.trees = trees;
        this.area = area;
    }

    getDensity() {
        return this.trees / this.area;
    }
};

class Street {
    constructor(name, length, classification = StreetClass.NORMAL) {
        this.name = name;
        this.length = length;
        this.classification = classification;
    }

    getName() {
        return this.name;
    }
};

const StreetClass = {
    TINY: 'Tiny',
    SMALL: 'Small',
    NORMAL: 'Normal',
    BIG: 'Big',
    HUGE: 'Huge'
}

const greenPark = new Park('Green Park', 10, 900, 100);
const oakPark = new Park('Oak Park', 20, 1000, 200);
const nationalPark = new Park('National Park', 30, 1100, 300);
const queensPark = new Park('Queens Park', 40, 1200, 400);
const parks = new Array(greenPark, oakPark, nationalPark, queensPark);

function ParkReport() {
    parks.forEach(park => console.log(`${park.name} has tree density of ${park.getDensity()} trees per square km.`));
    const ageAvg = parks.reduce((tot, park) => tot + park.age, 0) / parks.length;
    console.log('Average Age : ' + ageAvg);
    const moreThanThousandTreesParks = parks.filter(park => park.trees > 1000)
        .reduce((acc, park) => park.name + ',' + acc, '');
    console.log(moreThanThousandTreesParks + ' has more than thousand trees.')
}

ParkReport();