Object.prototype.attr0 = '0';//forma errada de fazer.

const avo = {attr1: 'A'};
const pai = {__proto__: avo, attr2: 'B'};
const filho = {__proto__: pai, attr3: 'C'};

console.log(filho.attr1);

const carro = {
    velocidadeAtual: 0,
    velocidadeMaxima: 200,
    acelerarMais(delta){
        if(this.velocidadeAtual + delta <= this.velocidadeMaxima){
            this.velocidadeAtual += delta;
        }else{
            this.velocidadeAtual = this.velocidadeMaxima;
        }
    },
    status(){
        return `${this.velocidadeAtual}Km/h de ${this.velocidadeMaxima}Km/h`;
    }
}

const ferrari = {
    modelo: 'F40',
    velocidadeMaxima: 324
}

const volvo = {
    modelo: 'V40',
    status(){
        return `${this.modelo}: ${super.status()}`
    }
}

Object.setPrototypeOf(ferrari, carro);
Object.setPrototypeOf(volvo, carro);

console.log(ferrari);
console.log(volvo);

volvo.acelerarMais(100);
console.log(volvo.status());