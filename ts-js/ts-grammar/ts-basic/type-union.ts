const unionFun = (param: number | string)=> {
    if(typeof param === 'number') {
        return param + 100;
    }
    else if(typeof param === 'string') {
        return `${param} + good`;
    }
    else {
        throw new TypeError(`param is not string or nubmer`);
    }
}
unionFun(28);
unionFun('hyun');

const uType: string | number | boolean = true;


/**
 *  interface union
 * 
 */
interface Student {
    name: string;
    class: string;
}
interface Teacher {
    name: string;
    major: string;
}
const getName = (someone: Student | Teacher)=> {
    // possible chaining: common property
    // someone.name (o)
    // someone.class(x), someone.major(x)    
    return someone.name;
}

/**
 *  union interception
 */
const getPerson = (someone: Student & Teacher)=> {
    // include property from Student and Teacher : sum of sets
    return  {
        name: someone.name,
        class: someone.class,
        major: someone.major
    }
    
}
getPerson({name: 'dong', class: 'A', major: 'car'});