class CalcController {
    
    constructor(parameters) {
        this.displayCalc = "0";
        this.dataAtual = new Date();
    }

    get displayCalc(){
        return this._displayCalc;
    }

    set displayCalc(valor){
        this.displayCalc = valor;
    }

    get dataAtual(){
        return this.dataAtual;
    }
    
    set dataAtual(valor){
        this.dataAtual = valor;
    }


    

}