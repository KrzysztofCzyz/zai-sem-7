import {Autor} from "./autor";
import {AutorPublisher} from "./autorPublisher";

export class AutorFetcher {
    public data: Autor[]

    constructor() {
        this.data = []
    }

    public execute(filename: string) {
        fetch(filename)
            .then(o => o.json())
            .then(d => d.data.forEach(a => this.data.push(Autor.create(a.imie, a.nazwisko, a.email))))
            .finally(() => new AutorPublisher().publish(this.data))
    }

}