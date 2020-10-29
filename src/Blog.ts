class Blog{
    private _id:Number
    private _nazwa:string
    private _autor:Autor
    private _artykuly:Artykul[]
    public get nazwa(){return this._nazwa}
    public get autor(){return this._autor}
    constructor(nazwa:string, autor:Autor) {
        this._autor=autor
        this._nazwa=nazwa
    }
    public dodajArtykul(artykul:Artykul){
        this._artykuly.push()
    }
    public pobierzTytulyArtykulow(){
        let result = [];
        this._artykuly.forEach(a => result.push(a.tytul));
        return result;
    }
    public pobierzArtykul(tytul:string){
        let result
        this._artykuly.forEach(a => {
            if (a.tytul == tytul) result=a})
        return result
    }
}
