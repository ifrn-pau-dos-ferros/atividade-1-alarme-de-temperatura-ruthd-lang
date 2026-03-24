import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.html',
  styleUrl: './card.css',
})
export class Card {
  temperatura = signal(30)

  aumentar(){
    this.temperatura.update((value)=> value + 10)
  }
  diminuir(){
    this.temperatura.update((value)=> value - 10)
  }
}
