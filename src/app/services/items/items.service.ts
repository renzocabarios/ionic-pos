import { Injectable } from '@angular/core';
import { StateService } from '../state/state.service';
import { IItems, IItemsState } from 'src/app/interfaces';
import { ApiService } from '../api/api.service';
import { Observable } from 'rxjs';

const initialState: IItemsState = {
  data: [],
};

@Injectable({
  providedIn: 'root',
})
export class ItemsService extends StateService<IItemsState> {
  data$: Observable<IItems[]> = this.select((state) => state.data);

  constructor(private api: ApiService) {
    super(initialState);
  }

  get data() {
    return this.state.data;
  }

  setData(data: IItems[]) {
    this.setState({ data });
  }

  async get() {
    this.setData((await this.api.get<IItems>('items')).reverse());
  }

  async post(body: any) {
    await this.api.post('items', body);
  }

  async patch() {}

  async delete(itemId: String) {
    await this.api.delete(`items/${itemId}`);
  }
}
