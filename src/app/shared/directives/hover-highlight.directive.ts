import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHoverHighlight]',
  standalone: true
})
export class HoverHighlightDirective {
  @Input('appHoverHighlight') highlightColor = 'rgba(0,0,0,0.04)';

  private originalBoxShadow: string | null = null;
  private originalTransform: string | null = null;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('mouseenter')
  onEnter() {
    const native = this.el.nativeElement as HTMLElement;
    this.originalBoxShadow = native.style.boxShadow || null;
    this.originalTransform = native.style.transform || null;

    this.renderer.setStyle(native, 'boxShadow', '0 39px 50px rgba(23,44,5,55.12)');
    this.renderer.setStyle(native, 'transform', 'translateY(-15px)');
    this.renderer.setStyle(native, 'transition', 'all 180ms ease');
  }

  @HostListener('mouseleave')
  onLeave() {
    const native = this.el.nativeElement as HTMLElement;
    if (this.originalBoxShadow !== null) {
      this.renderer.setStyle(native, 'boxShadow', this.originalBoxShadow);
    } else {
      this.renderer.removeStyle(native, 'boxShadow');
    }
    if (this.originalTransform !== null) {
      this.renderer.setStyle(native, 'transform', this.originalTransform);
    } else {
      this.renderer.removeStyle(native, 'transform');
    }
  }
}
