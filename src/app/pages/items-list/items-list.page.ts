import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { InvoiceModalComponent } from 'src/app/components/invoice-modal/invoice-modal.component';
import { IItems } from 'src/app/interfaces';
import { InvoicesService } from 'src/app/services/invoices/invoices.service';
import { ItemsService } from 'src/app/services/items/items.service';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.page.html',
  styleUrls: ['./items-list.page.scss'],
})
export class ItemsListPage implements OnInit {
  $items: Observable<IItems[]> = this.itemsService.data$;

  constructor(
    private itemsService: ItemsService,
    private invoicesService: InvoicesService,
    private router: Router,
    private modalController: ModalController
  ) {}

  ngOnInit() {
    this.itemsService.get();
  }

  async openModal() {
    const modal = await this.modalController.create({
      component: InvoiceModalComponent,
    });
    modal.present();
  }

  goToCreateItems() {
    this.router.navigate(['/create-item']);
  }

  handleRefresh(event: any) {
    this.itemsService.get().then((_) => {
      event.target.complete();
    });
  }

  addToCurrentInvoice(item: IItems) {
    this.invoicesService.add(item);
  }

  deleteItem(itemId: String = '') {
    this.itemsService.delete(itemId).then((_) => {
      this.itemsService.get();
    });
  }
}
