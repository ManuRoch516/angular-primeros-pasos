import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrl: './add-character.component.css'
})
export class AddCharacterComponent {

  // * Emitir eventos al padre
  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();

  public character: Character={
    name:'',
    power: 0,
  }

  //* Regresar los valores del formulario por defecto, valores vacios
  public emitCharacter(): void {

    //* depuracion en Angular
    //debugger;

    console.log(this.character);
    if( this.character.name.length === 0) return; //si no tiene nombre no se aceptara

    this.onNewCharacter.emit(this.character)

    this.character = {name: '', power: 0};
  }

}
