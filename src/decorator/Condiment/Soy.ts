import { Beverage } from '../Beverage/Beverage';
import { CondimentBeverage } from './CondimentBeverage';

export class Soy extends CondimentBeverage {
	private beverage: Beverage;

	constructor(beverage: Beverage) {
		super();

		this.beverage = beverage;
	}

	getDescription(): string {
		return this.beverage.getDescription() + ', Soy';
	}

	cost(): number {
		return this.beverage.cost() + 0.1;
	}
}
