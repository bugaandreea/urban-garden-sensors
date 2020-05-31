import { Component, OnInit } from '@angular/core';
import { IconServiceService } from 'src/app/services/icon-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'urban-garden-sensors';

  constructor(private iconService: IconServiceService) {
  }

  ngOnInit() {
    this.iconService.registerIcons();
  }
}
