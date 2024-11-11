import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  @Input()
  public characterList: Character[] = [{
    name: 'Gohan',
    power: 20,
  }]


  //Evento para eliminar ID
  @Output()
  public onDelete = new EventEmitter <string>();


  onDeleteCharacter(id?: string): void{
    //todo Emitir el ID del personaje
    if(!id) return
    this.onDelete.emit(id);
  }




}
