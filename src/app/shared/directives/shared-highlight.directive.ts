import { Directive, HostBinding } from '@angular/core';


@Directive({
  selector: 'span[ashetmTourismSharedHighlight]'
})
export class SharedHighlightDirective {

  @HostBinding('class.ashetm-tourism-global-highlight') highlighted:  true = true;

}
