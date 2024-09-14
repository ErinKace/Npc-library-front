import { Component, Input, OnInit } from '@angular/core';
import { Character } from '../models/character';

@Component({
  selector: 'app-chara-small',
  templateUrl: './chara-small.component.html',
  styleUrls: ['./chara-small.component.css']
})
export class CharaSmallComponent implements OnInit {
  @Input() character!: Character;

  constructor() { }

  ngOnInit(): void {
  }

}
