import { Component, OnInit } from '@angular/core';
import { PROMPTS } from 'src/app/config/cards';
import { Prompt } from 'src/app/model/prompt.model';

@Component({
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public prompts: Prompt[] = PROMPTS;

  public clicks: number[][];

  // Furbescamente: prompt si accede prima per indice, poi per nome
  // Mentre clicks si accede prima per nome e poi per indice.
  // ( ͡° ͜ʖ ͡°)

  constructor() {
    this.clicks = [];
    this.clicks['matt'] = new Array(PROMPTS.length).fill(0);
    this.clicks['albi'] = new Array(PROMPTS.length).fill(0);
    console.log(this.prompts);
  }

  ngOnInit(): void {
  }

  rotateCard(name: 'matt' | 'albi',  index: number) {
    if (this.clicks[name][index] === 0 || this.prompts[index][name].image2) {
      this.clicks[name][index]++;
    }
  }

}
