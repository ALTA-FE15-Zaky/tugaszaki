const a: number = 10
const b: number = 20

const add: number = a + b
const sub: number = b - a
const mul: number = a * b
const div: number = b / a
const mod: number = a % b

// console.log(add)
// console.log(sub)
// console.log(mul)
// console.log(div)
// console.log(mod)

// --- INCREMENT & DECREMENT
let numA: number = 10
let numB: number = 10

// console.log(++numA)
// ++numA = 10 + 1
// console.log(--numB)
// --numB = 10 - 1

// -- typescript bisa menggunakan 2 atau lebih tipe data untuk mendeklarasikan sebuah data
const total: string = "100" + 100
// console.log(total)

// --- REASSIGNMENT

// = -> reassignment (memberikan nilai pada suatu variabel)
// == -> membandingkan antara kedua value nya aja
// === -> membandingkan antara kedua value sekaligus tipe datanya

const temp: string = "30"
const condition_one: boolean = temp == "30"
const condition_two: boolean = temp === "30"
const condition_three: boolean = temp != "30"
const condition_four: boolean = temp !== "30"

console.log(condition_one)
console.log(condition_two)
console.log(condition_three)
console.log(condition_four)