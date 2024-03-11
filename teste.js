// Definição da classe SomadorDeNotas
class SomadorDeNotas {
    // Construtor da classe
    constructor() {
        this.total = 0;
    }

    // Método para adicionar uma nota ao total
    adicionarNota(nota) {
        this.total += nota;
    }

    // Método para exibir o total das notas adicionadas
    verTotal() {
        console.log(`O total das notas é: ${this.total}`);
    }
}

// Criando um objeto da classe SomadorDeNotas
let somador = new SomadorDeNotas();

// Adicionando algumas notas ao somador
somador.adicionarNota(10);
somador.adicionarNota(10);
somador.adicionarNota(7);

// Exibindo o total das notas
somador.verTotal();