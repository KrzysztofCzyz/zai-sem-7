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
    public execute(filename:string, publisher:IPublisher) {
        fetch(filename)
            .then(o => o.json())
            .then(d => d.data.forEach(a => this.data.push(Autor.create(a.imie, a.nazwisko, a.email))))
            .finally(() => publisher.publish(this.data))}

}
interface IPublisher{
    publish(data:Autor[]):void;
}

class UlPublisher implements IPublisher {
    public list

    constructor() {
        this.list = document.createElement("ul")
        document.getElementById('body').appendChild(this.list)
    }

    public publish(data){
        data.forEach(d => {let x = document.createElement("li");x.innerText=d.imie+" "+d.nazwisko+" "+d.email;this.list.appendChild(x)})
    }
}

class OlPublisher implements IPublisher {
    public list

    constructor() {
        this.list = document.createElement("ol")
        document.getElementById('body').appendChild(this.list)
    }

    public publish(data){
        data.forEach(d => {let x = document.createElement("li");x.innerText=d.imie+" "+d.nazwisko+" "+d.email;this.list.appendChild(x)})
    }
}

class TablePublisher implements IPublisher {
    public list

    constructor() {
        this.list = document.createElement("table")
        document.getElementById('body').appendChild(this.list)
    }

    public publish(data){
        data.forEach(d => {
            let x = document.createElement("tr");
            let y1 = document.createElement("td");
            y1.innerText=d.imie;
            let y2 = document.createElement("td");
            y2.innerText=d.nazwisko;
            let y3 = document.createElement("td");
            y3.innerText=d.email;
            x.appendChild(y1);
            x.appendChild(y2);
            x.appendChild(y3);
            this.list.appendChild(x);

        })
    }
}

document.getElementById("go").addEventListener("click", function (){
    let xs = new AutorFetcher()
    let sel:HTMLSelectElement = <HTMLSelectElement> document.getElementById("pub")
    let val = sel.value
    if (val == "1"){
        xs.execute("dane.json", new UlPublisher())
    }
    else if (val == "1"){
        xs.execute("dane.json", new OlPublisher())
    }
    else {
        xs.execute("dane.json", new TablePublisher())
    }

})
