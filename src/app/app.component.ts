import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title: string = 'Tutorial';
  hours: number = 0;
  name: string = 'sravan';
  firstNames: string[] = ['Sudheer', 'Ajay', 'Teja', 'Shanthan', 'Kalyan'];
  lastName: string[] = [
    'Vakadani',
    'Attapuram',
    'Akula',
    'Anumalapalli',
    'Pinninti',
  ];
  greet: string = 'Hi';
  city: string = 'Vancouver';

  constructor() {
    console.log("constructor works");
  }

  displayFirstName() {
    alert(this.firstNames[0]);
    console.log(this.firstNames);
  }
  greetPerson() {
    alert('Hi ' + this.firstNames[0] + ', Have a Nice Day!');
    console.log('greeted');
  }
  changeTitle(newtitle: string, hours: number) {
    this.title = newtitle;
    this.hours = hours;
    console.log(this.title);
  }

  changeFirstName(name: string) {
    this.firstNames[0] = name;
    alert(this.firstNames[0]);
  }

  updateTitle(name: string) {
    this.firstNames[0] = name;
    console.log(this.firstNames);
  }

  giveMessage() {
    this.updateTitle('tom');
  }
  searchRecords() {
    this.greetPerson();
  }

}
