let heightCylinder = '10м',
    radiusCylinder = a7 / 2;

let heightCylinderNum = parseInt(heightCylinder);

let VCylinderResult = Math.PI * Math.pow(radiusCylinder, 2) * heightCylinderNum,
    VCylinder = VCylinderResult.toFixed(2) + 'м^3';

console.log(VCylinder,);