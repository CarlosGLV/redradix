import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-tab',
  templateUrl: './first-tab.component.html',
  styleUrls: ['./first-tab.component.scss']
})
export class FirstTabComponent implements OnInit {

  public toggleInfo: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  showHideInfo() {
    /* Javascript */
    /*const info = document.querySelector('.rates .info');
    info.classList.toggle('active');*/
    /* Angular */
    this.toggleInfo = !this.toggleInfo;
  }

}

