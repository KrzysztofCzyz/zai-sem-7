import {Autor} from "./autor";
import {IPublisher} from "./IPublisher";

export class AutorFetcher {
    public data: Autor[]

    constructor() {
        this.data = []
    }

    public execute(filename: string, publisher: IPublisher) {
        fetch(filename)
            .then(o => o.json())
            .then(d => d.data.forEach(a => this.data.push(Autor.create(a.imie, a.nazwisko, a.email))))
            .finally(() => publisher.publish(this.data))
    }

}