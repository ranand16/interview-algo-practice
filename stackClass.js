class Stack {
    constructor() {
        this.items = [];
    }

    push = (item) => {
        this.items.push(item);
    }

    pop = () => {
        if(this.isEmpty()) return null
        return this.items.pop()
    }

    peek = () => {
        // console.log(this.items, "        ", this.length(), "           ", this.items[this.length() - 1]);
        return this.items[this.length() - 1]
    }

    isEmpty = () => {
        return this.items.length<=0?true:false
    }

    printItems = () => {
        let output = "";
        for(let i=0; i<this.length(); i++) {
            output += this.items[i] + " ";
        }
        console.log(output===""?"no items in stack":output)

    }

    length = () => {
        return this.items.length
    }
}

