# Questões objetivas

**1)** O que o código a seguir faz?

![Uma imagem](assets/ex01.PNG)

Escolha a opção que responde corretamente:

a) Imprime os números pares de 1 a 10. (CORRETA!)

b) Imprime os números ímpares de 1 a 10.

c) Imprime os números pares de 2 a 10.

d) Imprime os números ímpares de 2 a 10.

______

**2)** Identificar a linha que falta no código para criar uma classe Veiculo com atributo marca, e uma classe Carro que herda de Veiculo com um método ligar(). 

![Uma imagem](assets/ex02.PNG)

No lugar onde está escrito “// linha” qual das opções abaixo deve estar para funcionar corretamente o código?

A) let carro = new Carro("Toyota"); (CORRETA!)

B) let ligar = new ligar("Toyota");

C) class Moto extends Veiculo {};

D) carro1.ligar();

______

**3)** Qual é o valor de resultado após a execução deste código?

![Uma imagem](assets/ex03.PNG)

Escolha a opção que responde corretamente:

A) 18 (CORRETA!)

B) 16

C) 14

D) 12

______

**4)** Como você criaria um método `acelerar()` em uma classe `Carro`, que recebe um parâmetro `velocidade` e o adiciona a um atributo `velocidadeAtual`?

A) ![Uma imagem](assets/ex04_1.PNG) (CORRETA!)

B) ![Uma imagem](assets/ex04_2.PNG)

C) ![Uma imagem](assets/ex04_3.PNG)

D) ![Uma imagem](assets/ex04_4.PNG)

______

**5)** Qual a forma correta de definir uma classe Carro em JavaScript, com um método ligar() e um atributo marca?

A) ![Uma imagem](assets/ex05_1.PNG) (CORRETA!)

B) ![Uma imagem](assets/ex05_2.PNG)

C) ![Uma imagem](assets/ex05_3.PNG)

D) ![Uma imagem](assets/ex05_4.PNG)

______

**6)** Observe o código abaixo:

![Uma imagem](assets/ex06.PNG)

Qual será a saída do código acima?

A) "Olá, meu nome é João. Olá, meu nome é Maria." (CORRETA!)

B) "Olá, meu nome é ."

C) "João Maria"

D) "undefined undefined"

______

# Questões dissertativas

**7)** Vamos criar um programa em JavaScript para entender classes, métodos e atributos!
Classe Animal:
- Crie uma classe chamada Animal.
- Adicione dois atributos: nome e idade.
- Adicione um método chamado descrever() na classe Animal.
  - Este método deve exibir no console uma descrição do animal com seu nome e idade.

Criando e manipulando Animais:
- Crie dois objetos da classe Animal: um chamado "cachorro" e outro "gato", com idades distintas.
- Para cada animal, chame o método descrever() para ver a descrição no console.

Dica: Utilize `console.log()` para exibir as informações!

```javascript
// Criando uma classe chamada Animal.
class Animal {
    // Construtor da classe com os dois atributos
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }

    // Método para descrever o animal
    descrever() {
        console.log(`O nome do animal é ${this.nome} e tem ${this.idade} anos de idade.`);
    }
}

// Criando objetos da classe Animal
let cachorro = new Animal("Nikki", 5);
let gato = new Animal("Vicki", 3);

// Chamando o método descrever() para cada animal
cachorro.descrever();
gato.descrever();
console.log(cachorro)
```

______

**8)** Nos últimos dias tivemos a oportunidade de ter contato com Programação Orientada a Objetos, e tivemos contato com o tema "herança". Herança é um princípio de orientação a objetos, que permite que classes compartilhem atributos e métodos. Ela é usada na intenção de reaproveitar código ou comportamento generalizado ou especializar operações ou atributos. Então vamos praticar esse conteúdo nessa questão.
Vamos criar um programa em JavaScript para entender classes, métodos, atributos e herança!

Classe Animal:
- Crie uma classe chamada Animal.
- Adicione dois atributos: nome e idade.
- Adicione um método descrever() que exiba no console uma descrição do animal com seu nome e idade.

Classe Gato (Herda de Animal):
- Crie uma classe chamada Gato que herda da classe Animal.
- Adicione um atributo extra cor específico para gatos.
- Adicione um método miar() que exiba no console o som que um gato faz.

Criando Animais:
- Crie dois objetos da classe Animal: um chamado cachorro e outro gato, com idades distintas.
- Para o gato, também defina a cor.

Chamando os Métodos:
- Para cada animal, chame o método descrever() para ver a descrição no console.
- Para o gato, chame o método miar() para "ouvir" o som que ele faz (é também para ver o som no console).

Dica: Utilize console.log() para exibir as informações!

```javascript
// Definição da classe Animal
class Animal {
    // Construtor da classe
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }

    // Método para descrever o animal
    descrever() {
        console.log(`O animal se chama ${this.nome} e tem ${this.idade} anos de idade.`);
    }
}

// Definição da classe Gato, que herda de Animal
class Gato extends Animal {
    // Construtor da classe Gato
    constructor(nome, idade, cor) {
        // Chama o construtor da classe Animal
        super(nome, idade);
        this.cor = cor;
    }

    // Método para fazer o gato miar
    miar() {
        console.log("Miau!");
    }
}

// Criando instâncias das classes Animal e Gato
let cachorro = new Animal("Nikki", 5);
let gato = new Gato("Vicki", 3, "cinza");

// Chamando o método descrever() para cada animal
cachorro.descrever();
gato.descrever();

// Chamando o método miar() apenas para o gato
gato.miar();
```

______

**9)** Vamos criar um programa em JavaScript para somar notas!

Classe SomadorDeNotas:
- Crie uma classe chamada SomadorDeNotas.
- Adicione um atributo total inicializado com 0 para armazenar a soma das notas.

Método adicionarNota:
- Adicione um método chamado adicionarNota(nota) na classe SomadorDeNotas.
- Este método deve receber um parâmetro nota e somá-lo ao atributo total.

Criando o Somador e Adicionando Notas:
- Crie um objeto da classe SomadorDeNotas, chamado somador.
- Utilize o método adicionarNota(nota) para adicionar algumas notas ao somador.

Chamando o Método para Ver o Total:
- Após adicionar todas as notas, chame um método verTotal() para exibir o total das notas adicionadas.

Dica: Utilize console.log() para exibir as informações!


```javascript
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
```
______

**10)** Imagine que você está criando um programa em JavaScript para uma escola. Neste programa, existem diferentes tipos de funcionários, cada um com suas próprias características. Considere as seguintes classes:

Funcionário:
- atributo: Nome
- atributo: Idade
- atributo: Salário base
- método: calcularSalario() - Este método calcula o salário total do funcionário. Para cada tipo de funcionário, o cálculo será diferente.

Professor (herança de Funcionário):
- atributo: Disciplina
- atributo: Horas de aula por semana
- método: calcularSalario() - Para calcular o salário do professor, multiplicamos suas horas de aula pelo valor da hora/aula.

Agora, sua tarefa é escrever um código em JavaScript que crie as classes Funcionário e Professor, com suas características e métodos descritos acima. Depois de criar as classes, crie:
- Dois objetos do tipo Professor com informações fictícias.
- Para cada objeto, chame o método calcularSalario() e mostre o salário calculado no console.

Certifique-se de explicar cada parte do código utilizando comentários, explicando para que serve cada atributo e método, bem como a lógica por trás do cálculo de salário para o tipo de funcionário Professor.

```javascript
// Definição da classe Funcionário
class Funcionario {
    // Construtor da classe
    constructor(nome, idade, salarioBase) {
        this.nome = nome;
        this.idade = idade;
        this.salarioBase = salarioBase;
    }

    // Método para calcular o salário total do funcionário
    calcularSalario() {
        // Este método será implementado de forma específica nas classes filhas
    }
}

// Definição da classe Professor, que herda de Funcionário
class Professor extends Funcionario {
    // Construtor da classe Professor
    constructor(nome, idade, salarioBase, disciplina, horasAula) {
        // Chama o construtor da classe Funcionario
        super(nome, idade, salarioBase);
        this.disciplina = disciplina;
        this.horasAula = horasAula;
    }

    // Método para calcular o salário do professor
    calcularSalario() {
        // O salário do professor é calculado multiplicando suas horas de aula pelo valor da hora/aula
        let valorHoraAula = this.salarioBase / 40; // Supondo que a carga horária semanal seja de 40 horas
        let salario = this.horasAula * valorHoraAula;
        return salario;
    }
}

// Criando objetos do tipo Professor
let professor1 = new Professor("João", 35, 3000, "Matemática", 20); // 20 horas de aula por semana
let professor2 = new Professor("Maria", 40, 3500, "Português", 25); // 25 horas de aula por semana

// Calculando e mostrando o salário dos professores
console.log(`${professor1.nome} - Salário: R$ ${professor1.calcularSalario().toFixed(2)}`);
console.log(`${professor2.nome} - Salário: R$ ${professor2.calcularSalario().toFixed(2)}`);

```