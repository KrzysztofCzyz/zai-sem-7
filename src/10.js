import {of,fromEvent} from 'rxjs';
import {reduce, scan, take} from "rxjs/operators";

class Raz{

    constructor() {
        this.trzy = fromEvent(document.getElementById("trzy"), 'click')
            .pipe(scan(count => count + 1, 0))
            .subscribe(count => document.getElementById("paragraf").innerHTML=count.toString());

        this.dwa = fromEvent(document.getElementById("dwa"), 'click')


        this.jeden = fromEvent(document.getElementById("jeden"), 'click')
            .subscribe(() => {
                this.dwa.subscribe(() => {
                    this.trzy.unsubscribe()
                });
            });


    }
}
let x =new Raz()