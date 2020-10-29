function pobierzDane(extractorFunction,autor:Autor):string{
    return extractorFunction(autor)
}

function HTMLListExtractor(autor: Autor){
    let dane = [autor.imie,autor.nazwisko,autor.email]
    let result = ""
    dane.forEach(d => result=result+"<li>"+d+"</li>")
    return result;
}

function CSVExtractor(autor:Autor){
    let dane = [autor.imie,autor.nazwisko,autor.email]
    return dane.join(",");
}