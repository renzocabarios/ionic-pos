import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    {
      title: 'Create Invoice',
      url: '/items-list',
      icon: 'list-circle',
    },
    { title: 'Invoices', url: '/invoices-list', icon: 'list' },
    {
      title: 'Create Item',
      url: '/create-item',
      icon: 'pricetags',
    },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
