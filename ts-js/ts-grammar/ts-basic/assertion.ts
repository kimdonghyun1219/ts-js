/**
 *  developer assertion -> code logic have to perfect for return value
 */
let a;
a = 'dong'
a = 28
// const b = a; => b return: any
const b = a as number // b return: number

/**
 *  DOM API
 */
document.querySelector('div') // HTMLDivElement | null
const div = document.querySelector('div') as HTMLDivElement
div.textContent

/**
 *  type-assertion
 */
let certitude: string | null;
const result = certitude!.toString();