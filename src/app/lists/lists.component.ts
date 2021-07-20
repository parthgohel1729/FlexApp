import { Component, OnInit, ViewEncapsulation } from '@angular/core';

export interface Section {
  title: string;
  subtitle: string;
}

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.css']
})
export class ListsComponent implements OnInit {

  locations: Section[] = [
    {
      title: 'Jack & Jones The Quays Shopping Center ',
      subtitle: 'The Quays Shoping Center, Newry, Down BT35 8QS'
    },
    {
      title: 'Pandora The Mall Tralee',
      subtitle: 'The Mall Tralee, Kerry, V92 DK46'
    },
    {
      title: 'Applegreen Rathcoole',
      subtitle: 'Rathcoole, Keating Park, Nass Road, Rathcoole, Dublin'
    },
    {
      title: 'Jack & Jones The Quays Shopping Center ',
      subtitle: 'The Quays Shoping Center, Newry, Down BT35 8QS'
    },
    {
      title: 'Pandora The Mall Tralee',
      subtitle: 'The Mall Tralee, Kerry, V92 DK46'
    },
    {
      title: 'Applegreen Rathcoole',
      subtitle: 'Rathcoole, Keating Park, Nass Road, Rathcoole, Dublin'
    },
    {
      title: 'Jack & Jones The Quays Shopping Center ',
      subtitle: 'The Quays Shoping Center, Newry, Down BT35 8QS'
    },
    {
      title: 'Pandora The Mall Tralee',
      subtitle: 'The Mall Tralee, Kerry, V92 DK46'
    },
    {
      title: 'Applegreen Rathcoole',
      subtitle: 'Rathcoole, Keating Park, Nass Road, Rathcoole, Dublin'
    },
    {
      title: 'Jack & Jones The Quays Shopping Center ',
      subtitle: 'The Quays Shoping Center, Newry, Down BT35 8QS'
    },
    {
      title: 'Pandora The Mall Tralee',
      subtitle: 'The Mall Tralee, Kerry, V92 DK46'
    },
    {
      title: 'Applegreen Rathcoole',
      subtitle: 'Rathcoole, Keating Park, Nass Road, Rathcoole, Dublin'
    }
  ];


  constructor() { }

  ngOnInit(): void {
  }

}
