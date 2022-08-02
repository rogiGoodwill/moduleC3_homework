function ElectricDevices(name, power) {
    this.name = name;
    this.power = power;
    this.isPlug = false;
}

ElectricDevices.prototype.isOn = function () {
    console.log(`${this.name} is On!`);
    this.IsOn = true;
}

ElectricDevices.prototype.isOff = function () {
    console.log(`${this.name} is Off!`);
    this.IsOn = false;
}

function DeviceTV(name, brand, power, isColor) {
    this.name = name;
    this.brand = brand;
    this.power = power;
    this.IsColor = true;
    this.isPlug = false;
}

DeviceTV.prototype = new ElectricDevices();

function DeviceRefrigerator(name, brand, power, energyClass) {
    this.name = name;
    this.brand = brand;
    this.power = power;
    this.energyClass = energyClass;
    this.isPlug = true;
}

DeviceRefrigerator.prototype = new ElectricDevices();

const tvSamsung = new DeviceTV('badroomTV', 'Samsung', '50 wt', true );
const fridgeHaier = new DeviceRefrigerator('kitchenFridge', 'Haier', '100wt', 'A+');

console.log(tvSamsung);
console.log(fridgeHaier);

tvSamsung.isOn();
fridgeHaier.isOff();