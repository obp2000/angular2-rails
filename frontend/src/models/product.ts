export class Product {
  id: number;
  name: string;
  price: number;
  createdAt: Date;
  updatedAt: Date;
  weight: number;
  width: number;
  density: number;
  dollar_price: number;
  dollar_rate: number;
//  price_rub_m: number;

  constructor(obj: any) {
    this.id        = obj && obj.id         || null;
    this.name      = obj && obj.name       || '';
    this.price     = obj && obj.price      || 0;
    this.createdAt = obj && obj.created_at || null;
    this.updatedAt = obj && obj.updated_at || null;
    this.weight    = obj && obj.weight     || 0;
    this.width     = obj && obj.width      || 0;
    this.density   = obj && obj.density    || 0;
    this.dollar_price = obj && obj.dollar_price || 0;
    this.dollar_rate  = obj && obj.dollar_rate  || 0;

  };

  price_rub_kg(): number {
      return 44;
  };

  price_rub_m(): number {
    return (this.dollar_price * this.dollar_rate /
            (1000 / ((this.density / (100 * 100)) * this.width * 100)));
  };

  meters(): number {
    return (this.weight / ((this.density * (this.width / 100)) / 1000));
  };
}

