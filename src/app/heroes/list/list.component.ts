import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  public heroesName: string[] = ['Spiderman', 'Iroman', 'Thor', 'Hulk', 'Deadpool'];
  public deleteLastHero?: string;

  removeLastHero():void {
    this.deleteLastHero = this.heroesName.pop();
  }

}
