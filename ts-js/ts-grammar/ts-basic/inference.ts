interface Dropdown<T> {
    value: T,
    title: string
}

interface Detail<K> extends Dropdown<K> {
    desc : string,
    tag: K
}

const shoppingItem: Detail<string> = {
    title: 'good',
    desc: 'wow',
    value: 'great',
    tag: 'um'
}