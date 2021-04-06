import { Pizzeria } from './pizzeria';

export class AmerivanPizzeria extends Pizzeria {
    bake(): string {
        return 'pizza is being baked... please wait';
    }
};