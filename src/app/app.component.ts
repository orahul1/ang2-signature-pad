import { Component, ViewChild } from '@angular/core';
import { SignaturePad, SignaturePadModule } from 'ang2-signature-pad';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ SignaturePadModule],
  template: `
<SignaturePad [options]="signaturePadOptions" (onBeginEvent)="drawStart()" (onEndEvent)="drawComplete()"></SignaturePad>
  `,
  styles: [],
})
export class AppComponent {
  signaturePadOptions: Object = { // passed through to szimek/signature_pad constructor
    'minWidth': 5,
    'canvasWidth': 500,
    'canvasHeight': 300
  };

  @ViewChild(SignaturePad) signaturePad!: SignaturePad;

  constructor() {
    // no-op
  }

  ngAfterViewInit() {
    // this.signaturePad is now available
    this.signaturePad.set('minWidth', 5); // set szimek/signature_pad options at runtime
    this.signaturePad.clear(); // invoke functions from szimek/signature_pad API
  }

  drawComplete() {
    // will be notified of szimek/signature_pad's onEnd event
    console.log(this.signaturePad.toDataURL());
  }

  drawStart() {
    // will be notified of szimek/signature_pad's onBegin event
    console.log('begin drawing');
  }
}
