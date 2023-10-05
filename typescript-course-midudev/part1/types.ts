// // NOTE: Tipado para funciones
// function saludar (persona: {name: string, age: number}) {
//   return `Hola ${persona.name}, tienes ${persona.age} años`
// }

// saludar({name: 'Luis', age: 22})

// //NOTE: En este caso infiere que devuelve un number
// function saludar ({name, age}:{name: string, age: number}) {
//   console.log(`Hola ${name}, tienes ${age} años`)
//   return age
// }

// // NOTE: Tipado de funciones que reciben funciones (callbacks)
// // NOTE: los tpos void son para indicar que no devuelven nada pero en caso de que la funcion si tenga return se puede poner el tipo de valor que devuelve
// const sayHiFromFunction = (fn: (name: string) => void) => {
//   fn('Alex')
// } 

// sayHiFromFunction((name: string) => {
//   console.log(`Hola ${name}`)
// })

// // NOTE: Tipado de arrow functions
// const sumar = (a: number, b: number): number => a + b

// const rest: (a: number, b: number) => number = (a, b) => a - b

// // NOTE: never
// function throwArrow (message: string): never {
//   throw new Error(message)
// } 


// // NOTE: Type alias

// type HeroID = `${string}-${string}-${string}-${string}-${string}`
// type HeroPowerScale = 'local' | 'global' | 'universal' | 'multiversal'

// type HeroBasicInfo = {name: string, age: number}

// type HeroProperties = {
//   readonly id?: HeroID,
//   isActive?: boolean
//   powerScale?: HeroPowerScale
// }

// // Intersection types
// type Hero = HeroBasicInfo & HeroProperties

// // Objetos
// let hero: Hero = {
//   name: 'Ironman',
//   age: 45
// }

// function createHero (name: string, age: number): Hero{
//   return {
//     id: crypto.randomUUID(), 
//     name, 
//     age, 
//     isActive: true
//   }
// }

// const thor = createHero('Thor', 45)
// thor.powerScale = "multiversal"

// // NOTE: Type Indexing
// type HeroProperties = {
//   isActive: boolean
//   address: {
//     planet: string,
//     city: string
//   }
// }

// const addressHero: HeroProperties['address'] = {
//   planet: 'Tierra',
//   city: 'Santiago'
// }

// const address = {
//   planet: 'Earth',
//   city: 'Santiago'
// }

// type Address = typeof address

// const addressNew : Address = {
//   planet: 'Earth',
//   city: 'Valpo'
// }

// //NOTE:  Type from function retrun
// function createAddress () {
//   return {
//     planet: 'Earth',
//     city: 'Santiago'
//   }
// }

// type Address = ReturnType<typeof createAddress>

// // NOTE: Arrays
// const languajes: (string | number)[] = []

// languajes.push('JavaScript')
// languajes.push(2)

// NOTE: Tuplas
// Juego de 3x3

// type CellValue = 'X' | 'O' | ''
// type GameBorard = [
//   [CellValue, CellValue, CellValue],
//   [CellValue, CellValue, CellValue],
//   [CellValue, CellValue, CellValue],
// ]

// const game: GameBorard = [
//   ['X','O','O'],
//   ['X','O','X'],
//   ['X','','O']
// ] 

// // NOTE: Enums
// // Se debe usar const antes del enum siempre a excepcion de que el enuim se desee enviar a realizar alguna accion por el usuario
// const enum ERROR_TYPES {
//   NOT_FOUND = 'notFound',
//   UNAUTHORIZED = 'unauthorized',
//   FORBIDDEN = 'forbidden'
// }

// function mostrarMensaje (typeOfError: ERROR_TYPES) {
//   if(typeOfError === ERROR_TYPES.NOT_FOUND) {
//     console.log('No se encuentra el recurso')
//   }
//   else if (typeOfError === ERROR_TYPES.UNAUTHORIZED) {
//     console.log('No tiene los permisos para acceder')
//   }
//   else if(typeOfError === ERROR_TYPES.FORBIDDEN ) {
//     console.log('No tiene los permisos para acceder')
//   }
// }

// // NOTE: Aserciones de tipos
// const canvas = document.getElementById('span')

// // ???Como sabe TypeScript que realmente esta recuperando un elemento <canvas />
// // es inferencia -> TypeScript se da cuenta que dentro del if ya solo el canvas va a poder ser un HTMLCanvasElement

// if (canvas instanceof HTMLCanvasElement) {
//   const ctx = canvas.getContext('2d')
// }

// // NOTE: interfaces
// // En una interfaz, los métodos no deben tener implementaciones, es decir, no deben incluir código real como console.log
// interface Heroe {
//   id: string,
//   name: string,
//   age: number,
//   saludar: () => void;
// }

// interface Producto {
//   id: number
//   name: string
//   precio:number
// }

// interface Zapatilla extends Producto {
//   talla: number
// }

// interface CarritoDeCompras {
//   totalPrice: number
//   productos: Zapatilla[]
// }

// const carrito: CarritoDeCompras = {
//   totalPrice: 100,
//   productos: [
//     {
//       id: 1,
//       name: 'Nike',
//       precio: 100,
//       talla: 43
//     }
//   ]
// }


// // NOTE: Narrowind
// function mostrarObjeto (objeto: number | string) {
//   if (typeof objeto === 'string') {
//     return objeto.length
//   }

//   return objeto.toString().length
// }

// mostrarObjeto(1)

// interface Mario {
//   company: 'nintendo',
//   nombre: string
//   saltar: () => void
// }

// interface Sonic {
//   company: 'sega'
//   nombre: string
//   correr: () => void
// }

// type Personaje = Mario | Sonic

// function jugar(personaje: Personaje) {
//   if (personaje.company === 'nintendo') {
//     personaje.saltar()
//     return
//   }
//   console.log(personaje.correr())
// }

// // NOTE: Type Guard
// interface Mario {
//   nombre: string
//   saltar: () => void
// }

// interface Sonic {
//   nombre: string
//   correr: () => void
// }

// type Personaje = Mario | Sonic

// // Aqui compreuba que el personaje es sonic
// function checkIsSonic(personaje: Personaje): personaje is Sonic {
//   return (personaje as Sonic).correr !== undefined
// }
 
// function jugar(personaje: Personaje) {
//   if (checkIsSonic(personaje)) {
//     personaje.correr()
//     return
//   }
//   personaje.saltar()
// }

// NOTE: Insatnce of
interface Avenger {
  name: string
  powerScore: number
  wonBattles: number
}

class Avenger implements Avenger{
  name: string;
  #powerScore: number;
  wonBattles: number;

  constructor (name: string, powerScore: number) {
    this.name = name;
    this.#powerScore = powerScore
  }
  
  get fullName() {
    return `${this.name}, de poder ${this.#powerScore}`
  }

  set power(newPower: number) {
    if (newPower <= 100) {
      this.#powerScore = newPower
    }
    else {
      throw new Error("Power score cannot be more than 100");
    }
  }
}

const avengers = new Avenger('Spidey', 80)
