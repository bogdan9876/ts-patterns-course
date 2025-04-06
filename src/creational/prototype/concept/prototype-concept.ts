interface IProtoType {
    clone(): this

}

class MyClass implements IProtoType {
    field: number[]

    constructor(field: number[]) {
        this.field = field
    }

    clone() {
        return Object.assign({}, this)
    }
}

const OBJECT1 = new MyClass([1, 2, 3, 4])
console.log(`OBJECT1: ${JSON.stringify(OBJECT1)}`)

const OBJECT2 = OBJECT1.clone()
console.log(`OBJECT2: ${JSON.stringify(OBJECT2)}`)
OBJECT2.field[1] = 101

console.log(`OBJECT2: ${JSON.stringify(OBJECT2)}`)
console.log(`OBJECT1: ${JSON.stringify(OBJECT1)}`)