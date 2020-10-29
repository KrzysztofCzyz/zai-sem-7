import {AutorFetcher} from "./autorFetcher";
import {UlPublisher} from "./ulPublisher";
import {OlPublisher} from "./olPublisher";
import {TablePublisher} from "./tablePublisher";

document.getElementById("go").addEventListener("click", function (){
    let xs = new AutorFetcher()
    let sel:HTMLSelectElement = <HTMLSelectElement> document.getElementById("pub")
    let val = sel.value
    if (val == "1"){
        xs.execute("dane.json", new UlPublisher())
    }
    else if (val == "1"){
        xs.execute("dane.json", new OlPublisher())
    }
    else {
        xs.execute("dane.json", new TablePublisher())
    }

})