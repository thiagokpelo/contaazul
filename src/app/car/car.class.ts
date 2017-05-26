export class Car {

    private _combustivel: string;
    private _imagem:      string;
    private _marca:       string;
    private _modelo:      string;
    private _placa:       string;
    private _valor:       string;

    public check:         boolean = false;

    constructor(marca: string, modelo: string, placa: string ) {
        this._marca  = marca;
        this._modelo = modelo;
        this._placa  = placa;
    }

    // Setters
    
    set combustivel(value: string) {
        this._combustivel = value;
    }

    set imagem(value: string) {
        this._imagem = value;
    }

    set marca(value: string) {
        this._marca = value;
    }

    set modelo(value: string) {
        this._modelo = value;
    }

    set placa(value: string) {
        this._placa = value;
    }

    set valor(value: string) {
        this._valor = value;
    }

    // Getters

    get combustivel() {
        return this._combustivel;
    }

    get imagem() {
        return this._imagem;
    }

    get marca() {
        return this._marca;
    }

    get modelo() {
        return this._modelo;
    }

    get placa() {
        return this._placa;
    }

    get valor() {
        return this._valor;
    }
}
