class ElectricDevices {
    constructor(name, power) {
        this.name = name;
        this.power = power;
        this.isPlug = false;
    }

    devIsOn() {
        console.log(`${this.name} is On!`);
        this.IsOn = true;
    }

    devIsOff() {
        console.log(`${this.name} is Off!`);
        this.IsOn = false;
    }
}

class DeviceTV extends ElectricDevices {
    constructor(name, brand, power, isColor = true) {
        super(name, power);
        this.brand = brand;
        this.IsColor = true;
        this.isPlug = false;
    }
}

class DeviceRefrigerator extends ElectricDevices {
    constructor(name, brand, power, energyClass) {
        super(name, power);
        this.brand = brand;
        this.energyClass = energyClass;
        this.isPlug = true;
    }
}

const tvSamsung = new DeviceTV('badroomTV', 'Samsung', '50 wt', true);
const fridgeHaier = new DeviceRefrigerator('kitchenFridge', 'Haier', '100wt', 'A+');

console.log(tvSamsung);
console.log(fridgeHaier);

tvSamsung.isOn();
fridgeHaier.isOff();