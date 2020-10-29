export class Node {
    public vals: any[]
    public val: any

    constructor(val: any) {
        this.val = val
    }

    public push(node: Node) {
        this.vals.push(node)
    }

    public remove(node: Node) {
        let index = this.vals.indexOf(node)
        if (index > -1) {
            this.vals.splice(index, 1)
        }
    }

    public action(fun) {
        fun(this.val)
        this.vals.forEach(i => i.action(fun))
    }
}