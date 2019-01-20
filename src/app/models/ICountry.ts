import {ICurrency} from './ICurrency';

export interface ICountry {
  alpha3Code: string;
  name: string;
  flag: string;
  currencies: Array<ICurrency>;
  latlng: Array<number>;
  area: number;
}
