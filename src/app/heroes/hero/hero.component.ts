import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  public name: string = 'IronMan';
  public age: number = 45;

  //Se pueden interpolar, sin verse como una funcion ()
  get capitalizedName():string{
    return this.name.toUpperCase();
  }

  getHeroDescription(): string{
    return `${this.name} - ${this.age}`
  }

  //Metodos de tarea del curso
  changeHero(newName: string = 'Spiderman'): void{
    this.name = newName;
  }

  changeAge(newAge: number = 21):number{
    return this.age = newAge;
  }

  resetForm():void{
    this.name = 'ironman';
    this.age = 45
  }

  // resetName():string{
  //   return this.name = "IronMan"
  // }

  // resetAge():number{
  //   return this.age = 45;
  // }

}
