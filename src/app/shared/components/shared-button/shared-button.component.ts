import { Component, ChangeDetectionStrategy, Input, ViewChild, ElementRef } from '@angular/core';


@Component({
  selector:         'ashetm-tourism-shared-button',
  template:         `
    <mat-icon *ngIf="icon">{{ icon }}</mat-icon>
    <span #Content
      *ngIf="hasContent">
      <ng-content></ng-content>
    </span>
  `,
  styleUrls:        ['./shared-button.component.scss'],
  changeDetection:  ChangeDetectionStrategy.OnPush
})
export class SharedButtonComponent {

  @ViewChild('Content', { read: ElementRef }) content: ElementRef<HTMLSpanElement>;

  @Input() icon?: string;

  get hasContent(): boolean {
    const innerHTML: string = this.content?.nativeElement?.innerHTML;

    return innerHTML !== undefined && innerHTML.length !== 0;
  }

}
