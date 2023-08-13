function Calculadora() {
    this.display = document.querySelector('.display');

    this.inicia = () => {
        this.cliqueBotoes();
        this.enterPress();
    };

    this.cliqueBotoes = () => {
        document.addEventListener('click', e => {
            const el = e.target;

            if (el.classList.contains('btn-num')) this.btnToDisplay(el);
            if (el.classList.contains('btn-clear')) this.clearDisplay();
            if (el.classList.contains('btn-eq')) this.calculate();
            if (el.classList.contains('btn-del')) this.delete();
        });
    };

    this.btnToDisplay = el => {
        this.display.value += el.innerText;
        this.display.focus();
    }

    this.clearDisplay = () => this.display.value = '';

    this.delete = () => this.display.value = this.display.value.slice(0, -1); 

    this.calculate = () => {
        try {
            const expression = eval(this.display.value);

            if (!expression){
                alert('Cálculo Inválido');
                return;
            }
            this.display.value = expression

        } catch (e) {
            alert('Cálculo Inválido');
        }
    }

    this.enterPress = () => {
        this.display.addEventListener('keypress', e => {
            if (e.keyCode === 13) this.calculate();
        });
    };
}

const calculadora = new Calculadora();
calculadora.inicia();