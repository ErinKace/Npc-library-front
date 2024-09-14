import { Component, OnInit } from '@angular/core';
import { Character } from './models/character';

@Component({
  selector: 'app-library-list',
  templateUrl: './library-list.component.html',
  styleUrls: ['./library-list.component.css']
})
export class LibraryListComponent implements OnInit {

  ReturnedList: Character[] = [new Character('Lottie'), new Character("Marigold")];

  constructor() { }

  ngOnInit(): void {
  }

}
