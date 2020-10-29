class Fetcher{
    public data
    constructor(filename:string) {
        fetch("dane.json")
            .then(o => o.json())
            .then(d => d.data.forEach(a => this.data.push(Autor.create(a.imie, a.nazwisko, a.email))))
    }
}