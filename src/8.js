import {of,fromEvent} from 'rxjs';
import {reduce, scan} from "rxjs/operators";

class Raz{

    constructor() {
        fromEvent(document, 'click')
            .pipe(scan(count => count + 1, 0))
            .subscribe(count => document.getElementById("paragraf").innerHTML=count.toString());
    }
}
let x =new Raz()