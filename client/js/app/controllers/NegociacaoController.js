class NegociacaoController {

    constructor() {

        //bind() para o metodo querySelector nao perder o contexto this do document
        let $ = document.querySelector.bind(document);

        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');
    }

    adiciona(event) {
        event.preventDefault();
        
        // ... = spread operator, pega o array passado e divide em 3 parametros
        // =>  = arrow function, como temos uma instrucao, podemos deixar em 1 linha
        let data = new Date(
            ...this._inputData
                .value
                .split('-')
                .map((item, indice) => item - indice % 2)
        );

        let negociacao = new Negociacao(
            data, 
            this._inputQuantidade.value, 
            this._inputValor.value
        );

        console.log(negociacao);
    }
}