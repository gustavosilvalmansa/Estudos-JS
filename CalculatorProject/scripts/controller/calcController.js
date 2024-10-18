class CalcController {
    
    constructor(parameters) {
        this.displayCalc = "0";
        this.currentDate = new Date();
        this.initialize;
 
        this.initialize();
    }
    initialize(){
        let DisplayCalcEl = document.querySelector("#display");
        let dataEl = document.querySelector("data");
        let timeEl = document.querySelector("hora");

        DisplayCalcEl.innerHTML = "4567";
        dataEl.innerHTML = "15/08/2024";
        timeEl.innerHTML = "00.00";

    }

    get displayCalc(){
        return this._displayCalc;
    }

    set displayCalc(value){
        this._displayCalc = value;
    }

    get currentDate(){
        return this._currentDate;
    }

    set currentDate(value){
        this._currentDate = value;
    }


    

}
