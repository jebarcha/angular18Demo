import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  input,
  Input,
  output,
  Output,
} from '@angular/core';
import { Product } from '@interfaces/product.interface';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div
      class="bg-slate-200 w-full rounded-xl h-40 flex justify-center items-center flex-col"
    >
      <span>{{ product().name }}</span>
      <h2 class="font-bold text-sm my-2"># {{ product().id }}</h2>
      <button
        (click)="incrementQuantity()"
        class="bg-blue-500 p-2 px-2 rounded text-white hover:bg-blue-600 transition-all"
      >
        Quantity {{ product().quantity }}
      </button>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductCardComponent {
  //@Input({required: true}) product!: Product;
  product = input.required<Product>();

  //@Output()
  //public onIncrementQuantity = new EventEmitter<number>();
  public onIncrementQuantity = output<number>();

  public incrementQuantity(): void {
    this.onIncrementQuantity.emit(this.product().quantity + 1);
  }
}
