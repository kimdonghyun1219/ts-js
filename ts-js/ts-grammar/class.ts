class Person {
    public name: string;
    age: number;
    readonly log: string;
    private good : object;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}