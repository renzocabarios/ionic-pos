import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ItemsService } from 'src/app/services/items/items.service';

@Component({
  selector: 'app-create-item',
  templateUrl: './create-item.page.html',
  styleUrls: ['./create-item.page.scss'],
})
export class CreateItemPage implements OnInit {
  form = new FormGroup({
    name: new FormControl(''),
    price: new FormControl(0),
  });

  constructor(private itemsService: ItemsService, private router: Router) {}

  ngOnInit() {}

  submit() {
    this.itemsService.post({ ...this.form.value }).then(() => {
      this.router.navigate(['/items-list']);
    });
  }
}
