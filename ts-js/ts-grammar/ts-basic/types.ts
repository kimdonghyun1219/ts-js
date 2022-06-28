// number
const num: number = 28;

// string
const str: string = 'dong';

// array
const sArr: Array<string> = ['kim','dong','hyun'];
const nArr: number[] = [1,2,3,4,5];

// tuple
const food: [string, number] = ['apple', 2000];

// object
const obj: object = {};
const product: {id: number, name: string, price: number} = {
    id: 1,
    name: 'notebook',
    price: 3000000
}

// boolean
const bool: boolean = true;


// return 
const add = ():number=> {
    return 28;
}

const optional = (first: string, second?: number, third?: string)=> `${first} : ${third}`
optional('good');
