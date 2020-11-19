import {of,fromEvent} from 'rxjs';
import {reduce} from "rxjs/operators";

class Raz{

    constructor() {
        this.lmao=0
        fromEvent(document, 'click').subscribe(() => {this.lmao++; document.getElementById("paragraf").innerHTML=this.lmao});
    }
}
let x =new Raz()