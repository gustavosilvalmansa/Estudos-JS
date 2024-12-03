class CalcController {
    
    constructor(parameters) {
        this._operation = [];
        this._DisplayCalcEl = document.querySelector("#display");
        this._dataEl = document.querySelector("#data");
        this._timeEl = document.querySelector("#hora");
        this.currentDate = new Date(); 
        this.initialize();
        this.initButtonsEvents();
    }
    initialize(){
 


       setInterval(()=>{this.setDisplayDateTime();}, 1000);

      /* stops interval setTimeout(()=>{
            clearInterval(interval);
        }, 10000);
        */

    }  
    addEventListenerAll(element, events, fn){

        events.split(' ').forEach(event => {
            element.addEventListener(event, fn, false);
        });
    }
    clearAll(){
        this._operation = [];
    }

    addOperation(value){
        this._operation.push(value);
        console.log(this._operation);
    }

    clearEntry(){
        this._operation.pop();
    }
    setError(value){
        this.displayCalc = value;
    }

    execBtn(value){
        switch (value) {
            case 'ac':
                this.clearAll();    
            break;

            case 'ce':
               this.clearEntry();    
            break;

            case 'soma':
              //  this.clearEntry();    
            break;

            case 'divisao':
              //  this.clearEntry();    
            break;  
            
            case 'multiplicacao':
             //   this.clearEntry();    
            break;  

            case 'subtracao':
            //    this.clearEntry();    
            break;

            case 'porcento':
             //   this.clearEntry();    
            break;

            case 'igual':
              //  this.clearEntry();    
            break;

            case '0':
            case '1':
            case '2':
            case '3':
            case '4':
            case '5':
            case '6':
            case '7':
            case '8':
            case '9':
                this.addOperation(parseInt(value));
            break;

            default:
                this.setError(value);
                break;
        }
        
    }

    initButtonsEvents(){
     let buttons = document.querySelectorAll("#buttons > g, #parts > g");
        buttons.forEach((btn, index)=>{
            this.addEventListenerAll(btn, "click drag", e=>{
            
                let textBtn = btn.className.baseVal.replace("btn-", "");
                this.execBtn(textBtn);
             });
             this.addEventListenerAll(btn, "mouseover mouseup mousedown", e =>{
                btn.style.cursor = "pointer";
             })
        })
     
    
    
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
