import { Component, OnInit } from '@angular/core';

import { IClan, MemberList } from './clan';
import { CoCApiService } from '../services/coc-api.service';
import { CoCElasticService } from '../services/coc-elastic.service';
import { FileService } from '../services/file.service';

@Component({
  selector: 'app-clan-detail',
  templateUrl: './clan-detail.component.html',
  styleUrls: ['./clan-detail.component.scss']
})
export class ClanDetailComponent implements OnInit {
  clan!: IClan;
  clanMember!: MemberList;

  constructor(private fs: FileService, private as: CoCApiService, private es: CoCElasticService) { }

  ngOnInit(): void {
    this.fs.getClan().subscribe(c => {
      this.clan = c;
      c.memberList.forEach(m => { m.name === "Hayri" ? this.clanMember = m : false; })
    });

    //Uncomment lines to retrieve data from Elastic
    // this.es.getClan().subscribe(c => {
    //     this.clan = c._source;
    //     c._source.memberList.forEach(m => { m.name === "Hayri" ? this.clanMember = m : false; })
    // });

    //Uncomment lines to retrieve data from Backend API
    // this.as.getClan().subscribe(c => {
    //     this.clan = c;
    //     c.memberList.forEach(m => { m.name === "Hayri" ? this.clanMember = m : false; })
    // });
  };
}
