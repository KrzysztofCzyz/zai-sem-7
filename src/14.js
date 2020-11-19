import {of,fromEvent} from 'rxjs';
import {reduce, scan, share, take,map} from "rxjs/operators";

function xd(){
    document.getElementById("paragraf").innerHTML = document.getElementById("pole").value.toString()
}
function xd2(){
    var x = document.getElementById("j").value
    return isNaN(x) ? -1 : x
}
var i =0

class Raz{

    constructor() {
        this.pole = fromEvent(document.getElementById("pole"), 'input')
            .subscribe(e => document.getElementById("pole").value.toString().length > xd2() ? xd() : i++)



    }
}
let x =new Raz()