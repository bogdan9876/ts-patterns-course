import IAbstractExpression from "./iabstract-expression"
import Parser from './sentence-parser'

const SENTENCE = '5 + IV - 3 + VII - 2'
console.log(SENTENCE)

const AST_ROOT = Parser.parse(SENTENCE)

console.log((AST_ROOT as IAbstractExpression).interpret())

console.dir(AST_ROOT, { depth: null })
