import {of,fromEvent} from 'rxjs';
import {reduce, scan, share, take} from "rxjs/operators";

function a(v){
    document.getElementById(el).value=v
}
let el = "jeden"
class Raz{

    constructor() {


        this.trzy = fromEvent(document.getElementById("trzy"), 'click')
            .pipe(take(2))
            .pipe(scan(count => count + 1, 0))
            .subscribe((c) => c==1 ? el="d" : el="paragraf")


        this.dwa = fromEvent(document.getElementById("dwa"), 'click')
            .pipe(take(2))
            .pipe(scan(count => count + 1, 0))
            .subscribe((c) => c==1 ? el="j" : el="paragraf")


        this.jeden = fromEvent(document.getElementById("jeden"), 'click')
            .pipe(scan(count => count + 1, 0))
            .subscribe(count => a(count));


    }
}
let x =new Raz()