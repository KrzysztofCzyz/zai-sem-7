class Autor{
    private _id:Number
    private _imie:string
    private _nazwisko:string
    private _email:string
    public get imie() {return this._imie}
    public get nazwisko() {return this._nazwisko}
    public get email() {return this._email}
    public static create(imie:string, nazwisko:string, email:string) {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (imie != "" && nazwisko != "" && re.test(String(email).toLowerCase())){
            return new Autor(imie,nazwisko,email);
        }
        else return undefined
    }
    public constructor(imie:string, nazwisko:string, email:string) {
        this._imie = imie
        this._nazwisko = nazwisko
        this._email=email
    }
}

class AutorFetcher{
    public data: Autor[]
    constructor() {
        this.data = []
    }
    public execute(filename:string) {
        fetch(filename)
            .then(o => o.json())
            .then(d => d.data.forEach(a => this.data.push(Autor.create(a.imie, a.nazwisko, a.email))))
            .finally(() => new AutorPublisher().publish(this.data))}

}

class AutorPublisher{
    public list

    constructor() {
        this.list = document.createElement("ul")
        document.getElementById('body').appendChild(this.list)
    }

    public publish(data){
        data.forEach(d => {let x = document.createElement("li");x.innerText=d.imie+" "+d.nazwisko+" "+d.email;this.list.appendChild(x)})
    }
}

let x = new AutorFetcher()
x.execute("dane.json")