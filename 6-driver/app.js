const hasLicence = true;
const age = 18;
const isDrunk = false;

const canDrive = age >= 18 && hasLicence && !isDrunk;
console.log(`Может вести машину? ${canDrive ? 'Да' : 'Нет' }`);