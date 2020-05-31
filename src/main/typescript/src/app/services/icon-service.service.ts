import { Injectable } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from "@angular/material/icon";

@Injectable({
  providedIn: 'root'
})
export class IconServiceService {

  constructor(private readonly _matIconRegistry: MatIconRegistry,
    private readonly _domSanitizer: DomSanitizer) {
    }

    public registerIcons() {
      this._matIconRegistry.addSvgIcon('plants-view', this._domSanitizer.bypassSecurityTrustResourceUrl('../../assets/plant-view.svg'));
      this._matIconRegistry.addSvgIcon('stats', this._domSanitizer.bypassSecurityTrustResourceUrl('../../assets/graph-view.svg'));
      this._matIconRegistry.addSvgIcon('humidity-status', this._domSanitizer.bypassSecurityTrustResourceUrl('../../assets/humidity-status.svg'));
      this._matIconRegistry.addSvgIcon('warning', this._domSanitizer.bypassSecurityTrustResourceUrl('../../assets/warning.svg'));
    }
}
