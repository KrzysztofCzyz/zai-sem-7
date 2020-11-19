import {of,fromEvent} from 'rxjs';
import {reduce, scan, take} from "rxjs/operators";

class Raz{

    constructor() {
        fromEvent(document, 'click')
            .pipe(take(5))
            .pipe(scan(count => count + 1, 0))
            .subscribe(count => document.getElementById("paragraf").innerHTML=count.toString());
    }
}
let x =new Raz()