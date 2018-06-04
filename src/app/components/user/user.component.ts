import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-user',
	templateUrl: './user.component.html',
	styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
	name:string;
	age:number;
	email:string;
	address:Address;

	constructor() { }

	ngOnInit() {
		this.name = 'John Doe';
		this.age = 30;
		this.address = {
			street: '50 Main Street',
			city: 'Boston',
			state: 'MA'
		}
	}

}

interface Address{
	street:string,
	city:string,
	state:string
}
