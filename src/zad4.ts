class InputBox{
    private _val:number
    public _plusObj:HTMLButtonElement
    public _minusObj:HTMLButtonElement
    public _inputObj:HTMLInputElement
    public get val() {return this._val}
    constructor(val:number) {
        this._val=val
        this._plusObj = document.createElement("button")
        this._plusObj.innerText = "+"
        this._minusObj = document.createElement("button")
        this._minusObj.innerText = "-"
        this._inputObj = document.createElement("input")
        this._inputObj.value = val.toString();
        this._plusObj.addEventListener("click", () => this._val = this._val +1)
        this._plusObj.addEventListener("click", () => this._inputObj.value = this._val.toString())
        this._minusObj.addEventListener("click", () => {this._val = this._val -1;})
        this._minusObj.addEventListener("click", () => this._inputObj.value = this._val.toString())
        document.getElementById('body').append(this._inputObj,this._plusObj,this._minusObj)
    }
}
let iasd:InputBox = new InputBox(1)
