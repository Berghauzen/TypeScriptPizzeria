

interface Item {
    name: string;
  }

interface Item {
    code: string;
   }

interface Item {
    name: string;
    code: string;
    method1(): void;
    method2(): number;

}


interface ProductsQueue <T>{
    push(item: T): void;
    getAll(): T[]
}


class Queue <T>  implements ProductsQueue<T> {
    private data: T[] = [];

    push(item: number){
        this.data.push(item);
    }

    pop(){
        this.data.shift();
    }
    getAll(){
        return this.data;
    }
}

interface ProductItem{
    id: number;
   
}

//const people = new Queue<string>();
//people.push("abc");
//people.push(123);

//const numbers = new Queue<string>();
//people.push(456);
//people.push(456);

const productItems = new Queue< ProductItem & Item>();
productItems.push({ id: 123, name: 'Milk', code: 'AA333'})