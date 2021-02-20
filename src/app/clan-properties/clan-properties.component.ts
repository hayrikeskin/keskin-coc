import { Component, OnInit, Input } from '@angular/core';

import { IClan } from '../clan-detail/clan';

@Component({
  selector: 'app-clan-properties',
  templateUrl: './clan-properties.component.html',
  styleUrls: ['./clan-properties.component.scss']
})

export class ClanPropertiesComponent implements OnInit {  
  @Input()
  clan!: IClan;
  
  constructor() { }

  ngOnInit(): void { }
}
