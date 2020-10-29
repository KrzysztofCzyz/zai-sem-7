export class AutorPublisher {
    public list

    constructor() {
        this.list = document.createElement("ul")
        document.getElementById('body').appendChild(this.list)
    }

    public publish(data) {
        data.forEach(d => {
            let x = document.createElement("li");
            x.innerText = d.imie + " " + d.nazwisko + " " + d.email;
            this.list.appendChild(x)
        })
    }
}