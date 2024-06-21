import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-heavy-loaders-fast',
  standalone: true,
  imports: [CommonModule],
  template: `<h1>Hello World!</h1>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeavyLoadersSlowComponent {}
