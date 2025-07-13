export function hisAge(age) {
    return `His age is ${age}`;
}

class MyCustomers {

    printFirstPerson(name) {
        console.log(`The first person is ${name}`);
    }

    printSecondPerson(name) {
        console.log(`The Second person is ${name}`);
    }
}

export const customer = new MyCustomers();
