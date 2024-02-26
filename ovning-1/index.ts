{
    interface Car {
        class:string;
        year:number;
    }

    interface Jaguar extends Car {
        type: JaguarType;
    } 

    enum JaguarType {
        Super,
        Economic,
        Coupe,
    }

    function PrintJaguar(jaguar: Jaguar): void {
        console.log(`name: Jaguar ${jaguar.class}`);
        console.log(`year: ${jaguar.year}`);
        console.log(`Type: ${JaguarType[jaguar.type]}`);
    }

    const myJaguar: Jaguar = {
        class: 'Jaguar E-type',
        year: 1961,
        type: JaguarType.Super,
      };

      PrintJaguar(myJaguar);
}