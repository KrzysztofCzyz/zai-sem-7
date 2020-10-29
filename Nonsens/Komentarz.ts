class Komentarz{
    private _tresc:string
    private _data:Date
    private _odpowiedzi:Komentarz[]
    private _nick:string
    public get tresc() {return this._tresc}
    public get data() {return this._data}
    public get nick() {return this._nick}
    constructor(tresc:string, nick:string) {
        this._tresc = tresc
        this._nick = nick
    }
    public dodajOdpowiedz(odpowiedz:Komentarz){
        this._odpowiedzi.push(odpowiedz)
    }
    public pobierzOdpowiedzi(){
        return this._odpowiedzi
    }
}