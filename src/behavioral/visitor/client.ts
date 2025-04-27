import AbstractCarPart from "./abstract-car-part"
import IVisitor from "./ivisitor"

class CarBody extends AbstractCarPart {}

class Engine extends AbstractCarPart {}

class Wheel extends AbstractCarPart {}

class Car extends AbstractCarPart {
    #parts: AbstractCarPart[]

    constructor(name: string) {
        super(name)
        this.#parts = [
            new CarBody('Utility Body', 'ABC-123-21', 1001),
            new Engine('V8 engine', 'DEF-456-21', 2555),
            new Wheel('FrontLeft', 'GHI-789FL-21', 136),
            new Wheel('FrontRight', 'GHI-789FR-21', 136),
            new Wheel('BackLeft', 'GHI-789BL-21', 152),
            new Wheel('BackRight', 'GHI-789BR-21', 152),
        ]
    }

    accept(visitor: IVisitor) {
        this.#parts.forEach((part) => {
            part.accept(visitor)
        })
        visitor.visit(this)
    }
}

class PrintPartsVisitor implements IVisitor {
    visit(abstractCarPart: AbstractCarPart) {
        if (abstractCarPart.sku !== undefined) {
            console.log(
                `${abstractCarPart.name}\t:${abstractCarPart.sku}\t:${abstractCarPart.price}`
            )
        }
    }
}

class TotalPriceVisitor implements IVisitor {
    totalPrice = 0

    visit(abstractCarPart: AbstractCarPart) {
        if (abstractCarPart.price !== undefined) {
            this.totalPrice += abstractCarPart.price as number
        }
    }
}

const CAR = new Car('DeLorean')

CAR.accept(new PrintPartsVisitor())

const TOTAL_PRICE_VISITOR = new TotalPriceVisitor()
CAR.accept(TOTAL_PRICE_VISITOR)
console.log(`Total Price = ${TOTAL_PRICE_VISITOR.totalPrice}`)
