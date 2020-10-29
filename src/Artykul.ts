class Artykul{
    private _id:Number
    private _tytul:string
    private _tresc:string
    private _dataUtworzenia:Date
    private _komentarze: Komentarz[]
    public get tytul() {return this._tytul}
    public get tresc() {return this._tresc}
    constructor(tytul:string, tresc:string) {
        this._tytul = tytul
        this._tresc = tresc
    }
    public dodajKomentarz(komentarz:Komentarz){
        this._komentarze.push(komentarz)
    }
    public pobierzKomentarze() {
        return this._komentarze
    }
}