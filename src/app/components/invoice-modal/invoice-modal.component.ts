import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { InvoicesService } from 'src/app/services/invoices/invoices.service';

@Component({
  selector: 'invoice-modal',
  templateUrl: './invoice-modal.component.html',
  styleUrls: ['./invoice-modal.component.scss'],
})
export class InvoiceModalComponent implements OnInit {
  current$: Observable<any>;
  constructor(
    private modalController: ModalController,
    private invoicesService: InvoicesService
  ) {
    this.current$ = this.invoicesService.current$;
  }

  ngOnInit(): void {}

  cancel() {
    return this.modalController.dismiss(null, 'cancel');
  }

  confirm() {
    this.invoicesService
      .post({ items: this.invoicesService.current })
      .then((_) => {});
    return this.modalController.dismiss(null, 'confirm');
  }

  remove(itemId: string) {
    this.invoicesService.remove(itemId);
  }
}
