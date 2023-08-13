function criaCalculadora() {
    return {
        display: document.querySelector('.display'),

        inicia() {
            this.cliqueBotoes();
            this.enterPress();
        },

        enterPress() {
            this.display.addEventListener('keypress', (e) => {
                if (e.keyCode === 13) {
                    this.calculate();
                }
            });
        },

        calculate() {
            let expression = this.display.value;

            try {
                expression = eval(expression);

                if (!expression) {
                    alert('Cálculo inválido');
                    return;
                }
                this.display.value = String(expression);
                
            } catch (e) {
                alert('Cálculo inválido');
                return;
            }
        },

        clearDisplay() {
            this.display.value = '';
        },

        delete() {
            this.display.value = this.display.value.slice(0,-1);
        },

        cliqueBotoes() {
            document.addEventListener('click', (e) => {
                const el = e.target;
                
                if(el.classList.contains('btn-num')) {
                    this.btnParaDisplay(el.innerText);
                }

                if(el.classList.contains('btn-clear')) {
                    this.clearDisplay();
                }

                if(el.classList.contains('btn-del')) {
                    this.delete();
                }

                if(el.classList.contains('btn-eq')) {
                    this.calculate();
                }

            });
        },

        btnParaDisplay(valor) {
            this.display.value += valor;
        }
    };
}

const calculadora = criaCalculadora();
calculadora.inicia();