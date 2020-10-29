import {Node} from "./node";

class Tree{
    private rootNode:Node
    public action(a){
        this.rootNode.action(a)
    }
}

// akcje to funkcje np.
function xsss(val){
    console.log(val)
}