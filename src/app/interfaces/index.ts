export interface IItemsState {
  data: IItems[];
}

export interface IItems {
  _id?: String;
  price: Number;
  name: Number;
}

export interface IInvoicesState {
  current: IInvoiceItem[];
  data: IInvoice[];
}

export interface IInvoiceItem {
  price: Number;
  name: Number;
  quantity?: Number;
  _id: String;
}

export interface IInvoiceRequest {
  items: IInvoiceItem[];
}

export interface IInvoice {
  items: IInvoiceItem[];
  total: Number;
}
