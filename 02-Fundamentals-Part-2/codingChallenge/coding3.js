const mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,

    calcBMI: function (){
       this.BMI = this.mass/(this.height**2);
    }
};

const john = {
    fullName: 'Jhon Smith',
    mass: 98,
    height: 1.95,

    calcBMI: function (){
        this.BMI = this.mass/(this.height**2);
    }

};

john.calcBMI() > mark.calcBMI() ?
    console.log(`John's BMI (${john.BMI}) is higher than Mark's ((${mark.BMI})!`):
    console.log(`Mark's BMI (${mark.BMI}) is higher than John's (${john.BMI})!`);
