interface Member {
    name: string;
    age: number;
}

const member1: Member = {
    age: 28,
    name: 'dong'   
}

const getMember = (member: Member)=> {
    // member?.name
    // member?.age
}

/**
 *  method structure
 */
interface AddFun {
    (first: number, second: number): number
}
let sum: AddFun
sum = (a: number, b:number):number => {
    return a+b
}

/**
 *  indexing 
 */
interface StrArr {
    [index: number]: string
}


/**
 *  interface extends
 */

interface Person {
    name: string;
    age: number;
}

interface Student extends Person {
    grade: number;
}

const student1: Student = {
    name: 'dong',
    age: 28,
    grade: 3
}
