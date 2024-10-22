class CalcController {
    
    constructor(parameters) {
        this.displayCalc = "0";
        this.currentDate = new Date();
    }

    get displayCalc(){
        return this._displayCalc;
    }

    set displayCalc(value){
        this.displayCalc = value;
    }

    get currentDate(){
        return this.currentDate;
    }

    set currentDate(value){
        this.currentDate = value;
    }


    

}