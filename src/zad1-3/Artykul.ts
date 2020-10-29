export class Artykul{
    private _id:Number
    private _tytul:string
    private _tresc:string
    private _dataUtworzenia:Date
    private _komentarze: Komentarz[]
    public get tytul() {return this._tytul}
    public get tresc() {return this._tresc}
    public static create(tytul:string, tresc:string) {
        if (tytul != ""){
            return new Artykul(tytul,tresc,new Date())
        }
        else return undefined;
    }
    private constructor(tytul:string, tresc:string, data:Date) {
        this._tytul = tytul
        this._tresc = tresc
        this._dataUtworzenia = data
    }
    public dodajKomentarz(komentarz:Komentarz){
        this._komentarze.push(komentarz)
    }
    public pobierzKomentarze() {
        return this._komentarze
    }
}