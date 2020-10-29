import {IPublisher} from "./IPublisher";

export class TablePublisher implements IPublisher {
    public list

    constructor() {
        this.list = document.createElement("table")
        document.getElementById('body').appendChild(this.list)
    }

    public publish(data) {
        data.forEach(d => {
            let x = document.createElement("tr");
            let y1 = document.createElement("td");
            y1.innerText = d.imie;
            let y2 = document.createElement("td");
            y2.innerText = d.nazwisko;
            let y3 = document.createElement("td");
            y3.innerText = d.email;
            x.appendChild(y1);
            x.appendChild(y2);
            x.appendChild(y3);
            this.list.appendChild(x);

        })
    }
}