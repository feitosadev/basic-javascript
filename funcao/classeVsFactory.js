class Pessoa{
    constructor(nome){
        this.nome = nome;
    }

    falar(){
        console.log(`Meu nome é ${this.nome}`)
    }
}

const pessoa1 = new Pessoa('José')
pessoa1.falar();

const criarPessoa = nome => {
    falar: () => console.log(`Meu nome é ${this.nome}`)
}

const pessoa2 = new Pessoa('Carlos');
pessoa2.falar();