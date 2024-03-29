export default {
    name: 'Calculadora',
    data() {
      return {
        numeroAnterior: null,
        valorCorrente: '',
        operador: null,
        operadorClicado: false,
      };
    },
  
    methods: {
      // Método responsável por limpar o display da 'Calculadora'
      limpar() {
        this.valorCorrente = '';
      },
  
      /*
      * Método responsável por colocar o sinal '-' ou '+' para realização de operações
      * matemáticas especiais.
      */
      sinal() {
        this.valorCorrente = this.valorCorrente.charAt(0) === '-'
          ? this.valorCorrente.slice(1)
          : `-${this.valorCorrente}`;
      },
  
      // Método responsável por realizar operações com 'porcentagem':
      porcentagem() {
        this.valorCorrente = `${parseFloat(this.valorCorrente) / 100}`;
      },
  
      // Método responsável por juntar os números no display da Calculadora:
      juntarNumeros(numero) {
        if (this.operadorClicado) {
          this.valorCorrente = '';
          this.operadorClicado = false;
        }
        this.valorCorrente = `${this.valorCorrente}${numero}`;
      },
  
      // Método responsável por adicionar 'ponto' no display da Calculadora:
      ponto() {
        if (this.valorCorrente.indexOf('.') === -1) {
          this.juntarNumeros('.');
        }
      },
  
      // Método responsável por 'resetar' o valor na Calculadora:
      setarValor() {
        this.numeroAnterior = this.valorCorrente;
        this.operadorClicado = true;
      },
  
      // Método responsável por realizar a operação da 'divisão' da Calculadora
      dividir() {
        this.operador = (a, b) => a / b;
        this.setarValor();
      },
  
      // Método responsável por realizar a operação da 'multiplicação' da Calculadora
      multiplicar() {
        this.operador = (a, b) => a * b;
        this.setarValor();
      },
  
      // Método responsável por realizar a operação da 'diminuir' da Calculadora
      diminuir() {
        this.operador = (a, b) => a - b;
        this.setarValor();
      },
  
      // Método responsável por realizar a operação da 'adição' da Calculadora
      somar() {
        this.operador = (a, b) => a + b;
        this.setarValor();
      },
      log10() {
        if (this.valorCorrente === 0 || this.valorCorrente === "") {
            this.valorCorrente = 'Erro';
            return;
        }
        this.valorCorrente = `${Math.log10(parseFloat(this.valorCorrente))}`;
      },
      logop() {
        this.operador = (a, b) => {
            if (b === 0 || b === "") {
                return 'Erro';
            }
            return Math.log(a) / Math.log(b);
        }
        this.setarValor();
      },
      raizQuadrada() {
        if (this.valorCorrente < 0) {
            this.valorCorrente = 'Erro';
            return;
        }
        this.valorCorrente = `${Math.sqrt(parseFloat(this.valorCorrente))}`;
      },
      raizQuadradaOp() {
        this.operador = (a, b) => {
            if (a < 0) {
                return 'Erro';
            }
            return Math.pow(a, 1 / b);
        }
        this.setarValor();
      },
      elevadoa2() {
        this.valorCorrente = `${Math.pow(parseFloat(this.valorCorrente), 2)}`;
      },
      potencia() {
        this.operador = (a, b) => Math.pow(a, b);
        this.setarValor();
      },
      // Método responsável por apresentar o resultado das operações na Calculadora
      resultado() {
        this.valorCorrente = `${this.operador(
          parseFloat(this.numeroAnterior),
          parseFloat(this.valorCorrente),
        )}`;
        this.numeroAnterior = null;
      },
    },
  };