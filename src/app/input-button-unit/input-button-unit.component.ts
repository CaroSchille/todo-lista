import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-button-unit',
  template: `
    <p>
      input-button-unit works!
      The title is: {{ title }}
    </p>
  `,
  styleUrls: ['./input-button-unit.component.scss']
})
export class InputButtonUnitComponent implements OnInit {
  ngOnInit(): void {
  // this.title = 'Angular CLI Rules!';
  }

  title = 'InputButtonLevel';

  constructor() {
    console.log('in constructor');
    this.changeTitle('In the Constructor');
    console.log(this.title);
  }

  changeTitle(newTitle: string) {
    console.log(newTitle);
    this.title = newTitle;
  }

}
