//Old way
class celphone{
    constructor(){
        this.cor = "prata";
    }
    ligar(){
        console.log('uma ligação');
        return "ligando";
    }


}



let celular = function(){
    this.cor = "prata";
    
    //metodo
    this.ligar = function(){
        console.log('alo');
        return "ligando";
    }

}


let objeto = new celular();
let objeto2 = new celphone();

console.log(objeto.ligar());
console.log(objeto2.ligar());