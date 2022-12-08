
//Dados de treinamento
let entradas = Array();
let saidas = Array();

//Vermelho
entradas.push([1, -1, -1]);
saidas.push([1, -1, -1, -1, -1, -1, -1, -1]);

//Verde
entradas.push([-1, 1, -1]);
saidas.push([-1, 1, -1, -1, -1, -1, -1, -1]);

//Azul
entradas.push([-1, -1, 1]);
saidas.push([-1, -1, 1, -1, -1, -1, -1, -1]);

//Preto
entradas.push([-1, -1, -1]);
saidas.push([-1, -1, -1, 1, -1, -1, -1, -1]);

//Branco
entradas.push([1, 1, 1]);
saidas.push([-1, -1, -1, -1, 1, -1, -1, -1]);

//Amarelo
entradas.push([1, 1, -1]);
saidas.push([-1, -1, -1, -1, -1, 1, -1, -1]);

//Margenta
entradas.push([1, -1, 1]);
saidas.push([-1, -1, -1, -1, -1, -1, 1, -1]);

//Ciano
entradas.push([-1, 1, 1]);
saidas.push([-1, -1, -1, -1, -1, -1, -1, 1]);


const qtyPattern = 8;
const qtyInputs = 3;
const qtyOtput = 8;

class Neuron {
    inputs = Array();
    weights = Array();
    output;
    learningRate = 0.5;

    constructor(qtyEntradas){
        for(let i = 0; i < qtyEntradas; i ++) {
             //do {
                this.weights.push((((Math.random() * (1000 - 0) + 2) / 500) - 1).toFixed(2));
                //console.log(this.weights[i])
             //} while (this.weights[i] > -0.1 && this.weights[i] < 0.5); 
        }
    }

    setInputs(entradas) {
        this.inputs.push(entradas);
    }

    propagation() {
        let u = 1.0;
        for(let i = 0; i < qtyInputs; i++) {
            u = u + this.inputs[i] * this.weights[i];
            //console.log(this.inputs[i], this.weights[i], u.toFixed(2))
        }
        //console.log(u)
        this.output = u.toFixed(2);
    }

    updateWeights(out) {
        let error = out - this.output;
        //console.log(error, out, this.output)
        for(let i = 0; i < qtyInputs; i++) {
            this.weights.push(this.weights[i] + this.learningRate * error * this.inputs[i])
        }
    }

    getoutPut() {
        return this.output;
    }

}

let network = Array();
for (let generations = 0; generations < 1000; generations++) {
    for(let i = 0; i < qtyPattern; i++) {
        for(let j = 0; j < qtyOtput; j++) {
            if (generations === 0) {
                network[j] = new Neuron(qtyInputs)
            }
            network[j].setInputs(entradas[i][0]);
            network[j].propagation();
            network[j].updateWeights(saidas[i][j]);
            //network[j].getoutPut()
        }
    }
}

for(let i = 0; i < qtyOtput; i ++) {
    console.log(network[i].getoutPut())
}


async function WinnerTakesAll() {
    let max = -9999.9
    let i , classe;

    for(let i  = 0; i < qtyOtput; i++) {
        
    }
} 
/* async function testPerceptron() {
  let inputData = [1, 1, 1];
  let net = new Neuron(qtyInputs);
  net.setInputs(inputData);
  net.propagation()
  console.log("\n\nResultado:\n");
  console.log(net.getoutPut())
  
}

testPerceptron();
 */


