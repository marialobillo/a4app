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
	hobbies:string[];

	constructor() { }

	ngOnInit() {
		this.name = 'John Doe';
		this.age = 30;
		this.email = 'hello@mail.com';
		this.address = {
			street: '50 Main Street',
			city: 'Boston',
			state: 'MA'
		}
		this.hobbies = ['Write Code', 'Watching movies', 'Listen to Music'];
	}

	onClick(){
		console.log('HELLO');
		this.name = 'Maria';
		this.hobbies.push('New Hobby');
	}

	addHobby(hobby){
		console.log(hobby);
		this.hobbies.unshift(hobby);
		return false;
	}

	deleteHobby(hobby){
		console.log(hobby);
		for(let i = 0; i < this.hobbies.length; i++){
			if(this.hobbies[i] == hobby){
				this.hobbies.splice(i, 1);				
			}
		}
	}
}

interface Address{
	street:string,
	city:string,
	state:string
}
