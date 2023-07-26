import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IInvoice } from 'src/app/interfaces';
import { InvoicesService } from 'src/app/services/invoices/invoices.service';

@Component({
  selector: 'app-invoices-list',
  templateUrl: './invoices-list.page.html',
  styleUrls: ['./invoices-list.page.scss'],
})
export class InvoicesListPage implements OnInit {
  invoices$: Observable<IInvoice[]> = this.invoicesService.data$;

  constructor(private invoicesService: InvoicesService) {}

  ngOnInit() {
    this.invoicesService.get();
  }

  handleRefresh(event: any) {
    this.invoicesService.get().then((_) => {
      event.target.complete();
    });
  }
}
