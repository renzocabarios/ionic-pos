import { Injectable } from '@angular/core';
import {
  IInvoice,
  IInvoiceItem,
  IInvoiceRequest,
  IInvoicesState,
} from 'src/app/interfaces';
import { StateService } from '../state/state.service';
import { Observable } from 'rxjs';
import { ApiService } from '../api/api.service';

const initialState: IInvoicesState = {
  current: [],
  data: [],
};

@Injectable({
  providedIn: 'root',
})
export class InvoicesService extends StateService<IInvoicesState> {
  current$: Observable<IInvoiceItem[]> = this.select((state) => state.current);
  data$: Observable<IInvoice[]> = this.select((state) => state.data);

  constructor(private api: ApiService) {
    super(initialState);
  }

  get data() {
    return this.state.data;
  }

  setData(data: IInvoice[]) {
    this.setState({ data });
  }

  get current() {
    return this.state.current;
  }

  setCurrent(current: IInvoiceItem[]) {
    this.setState({ current });
  }

  add(item: any) {
    const doesExist: boolean = this.current.some((e: any) => e._id == item._id);
    const tempCurrent = this.current.map((e: any) => {
      if (e._id == item._id) e.quantity++;
      return e;
    });

    this.setCurrent(
      doesExist ? tempCurrent : [...this.current, { quantity: 1, ...item }]
    );
  }

  remove(itemId: string) {
    this.setCurrent(
      this.current.filter((e: any) => {
        return e._id != itemId;
      })
    );
  }

  async get() {
    const temp = (await this.api.get<IInvoice>('invoices')).reverse();
    this.setData(temp);
  }

  async post(body: IInvoiceRequest) {
    await this.api.post('invoices', body);
  }
}
