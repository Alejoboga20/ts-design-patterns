/* Primitive types */
const one: string = 'one';
const two: boolean = false;
const three: number = 3;
const four: null = null;
const five: unknown = 5;
const six: any = 6;
const seven: unique symbol = Symbol('seven');
let eight: never; // note that const eight: never cannot happen as we cannot instantiate a never

/* Enum */
enum Keys {
	Up,
	Down,
	Left,
	Right,
}
let up: Keys = Keys.Up;

const arr: number[] = [1, 2, 3]; // array of numbers of any size
const tup: [number] = [1]; // tuple with one element of type number

/* Classes */
class User {
	private name: string;

	constructor(name: string) {
		this.name = name;
	}

	public getName(): string {
		return this.name;
	}
}

const user = new User('Theo');
console.log(user.getName()); // prints "Theo"

/* Abstract classes */
abstract class BaseApiClient {
	abstract fetch(req: any): Promise<any>; /* must be implemented in sub-classes*/
}

class UsersClient extends BaseApiClient {
	fetch(req: any): Promise<any> {
		return Promise.resolve([]);
	}
}

const client = new UsersClient();
client.fetch({ url: '/users' });

/* Types and interfaces */
interface Comparable<T> {
	compareTo(o: T): number;
}
interface AppConfig {
	paths: {
		base: string;
	};
	maxRetryCount?: number;
}

type A = 'A'; // type is 'A'
type B = 'B'; // type is 'B'
type C = A & B; /* type is never as there is nothing in common between A and C*/
type D = C | 'E'; // type is "E" as C is a never type

type E = {
	name: string;
};

type F = E & {
	age: number;
};

let e: F = {
	name: 'Theo',
	age: 20,
};
