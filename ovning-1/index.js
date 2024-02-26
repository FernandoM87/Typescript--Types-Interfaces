"use strict";
{
    let JaguarType;
    (function (JaguarType) {
        JaguarType[JaguarType["Super"] = 0] = "Super";
        JaguarType[JaguarType["Economic"] = 1] = "Economic";
        JaguarType[JaguarType["Coupe"] = 2] = "Coupe";
    })(JaguarType || (JaguarType = {}));
    function PrintJaguar(jaguar) {
        console.log(`name: Jaguar ${jaguar.class}`);
        console.log(`year: ${jaguar.year}`);
        console.log(`Type: ${JaguarType[jaguar.type]}`);
    }
    const myJaguar = {
        class: 'Jaguar E-type',
        year: 1961,
        type: JaguarType.Super,
    };
    PrintJaguar(myJaguar);
}
