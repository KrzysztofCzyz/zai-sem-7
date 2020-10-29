class Autor{
    private _id:Number
    private _imie:string
    private _nazwisko:string
    private _email:string
    public get imie() {return this._imie}
    public get nazwisko() {return this._nazwisko}
    public get email() {return this._email}

    constructor(imie:string, nazwisko:string) {
        this._imie = imie
        this._nazwisko = nazwisko
    }
}