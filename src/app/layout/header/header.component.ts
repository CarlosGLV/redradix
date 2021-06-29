import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public menu: any[] = [
    {
      name: 'First Link',
      url: 'first-link',
      submenu: [
        {
          name: 'First tab',
          url: 'first-tab'
        },
        {
          name: 'Second tab',
          url: 'second-tab'
        },
        {
          name: 'Third tab',
          url: 'third-tab'
        },
        {
          name: 'Fourth tab',
          url: 'fourth-tab'
        }
      ]
    },
    {
      name: 'Second Link',
      url: 'second-link',
      submenu: [
        {
          name: 'First tab 02',
          url: ''
        },
        {
          name: 'Second tab 02',
          url: ''
        }
      ]
    },
    {
      name: 'Third Link',
      url: 'third-link',
      submenu: [
        {
          name: 'First tab 03',
          url: ''
        },
        {
          name: 'Second tab 03',
          url: ''
        }
      ]
    },
    {
      name: 'Fourth Link',
      url: 'fourth-link',
      submenu: [
        {
          name: 'First tab 04',
          url: ''
        },
        {
          name: 'Second tab 04',
          url: ''
        }
      ]
    }
  ];

  public sectionActual: string = '';
  public toggleMenu: boolean = false;


  constructor() { }

  ngOnInit(): void {
    this.findSection('first-link');
  }

  findSection(id: string) {
    this.sectionActual = id;
  }

  showHideMenu() {
    /* Javascript */
    /*const toggleBtn = document.querySelector('header .nav-toogle');
    const navMenu = document.querySelector('header nav');
    toggleBtn.classList.toggle('active');
    navMenu.classList.toggle('active');*/
    /* Angular */
    // Va a asignar el valor contrario del que tiene
    this.toggleMenu = !this.toggleMenu;
  }

}
