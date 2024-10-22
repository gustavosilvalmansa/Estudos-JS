class CalcController {
    
    constructor(parameters) {
        this._DisplayCalcEl = document.querySelector("#display");
        this._dataEl = document.querySelector("#data");
        this._timeEl = document.querySelector("#hora");
        this.currentDate = new Date(); 
        this.initialize();
    }
    initialize(){
 


       setInterval(()=>{this.setDisplayDateTime();}, 1000);

      /* stops interval setTimeout(()=>{
            clearInterval(interval);
        }, 10000);
        */

    }  
    setDisplayDateTime(){
        this.displayDate = this.currentDate.toLocaleDateString(this._locale);
        this.displayTime= this.currentDate.toLocaleTimeString(this._locale);
    }

    get displayCalc(){
        return this._DisplayCalcEl.innerHTML;
    }
    get displayDate(){
        return this._dataEl.innerHTML;
    }
    get displayTime(){
        return this._timeEl.innerHTML;
    }   
    set displayDate(value){
        return this._dataEl.innerHTML = value;
    }
    set displayTime(value){
        return this._timeEl.innerHTML= value;
    }  

    set displayCalc(value){
        this._DisplayCalcEl.innerHTML = value;
    }

    get currentDate(){
        return new Date();
    }

    set currentDate(value){
        this._currentDate = value;
    }


    

}
