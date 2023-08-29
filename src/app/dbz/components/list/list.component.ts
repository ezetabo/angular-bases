import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Input()
  public charaterList: Character[] = [];

  @Output()
  public getId: EventEmitter<string> = new EventEmitter();

  onDelete(id: string): void {
      this.getId.emit(id);
  }

}
