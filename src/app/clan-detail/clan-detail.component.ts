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
  otherClan!: IClan;
  clanMember!: MemberList;
  memberList!: MemberList[];
  tag!: string;

  constructor(private fs: FileService, private as: CoCApiService, private es: CoCElasticService) { }

  ngOnInit(): void {
    this.setClan(0, '8L000CQ8');
  }
  
  setClan(id: number, clanTag : string) {
    this.fs.getClan().subscribe(c => {
      id == 1 ? this.otherClan = c : this.clan = c; this.memberList = c.memberList; c.memberList.forEach(m => { m.name === 'Hayri' ? this.clanMember = m : false; });
    });
    
    //Uncomment lines to retrieve data from Backend API
    //this.as.getClan(clanTag).subscribe(c => {
    // id == 1 ? this.otherClan = c : this.clan = c; this.memberList = c.memberList; c.memberList.forEach(m => { m.name === 'Hayri' ? this.clanMember = m : false; });
    //});

    //Uncomment lines to retrieve data from Elastic
    //if(id == 0) {
    //  this.es.getClan().subscribe(c => {
    //    this.clan = c._source; 
    //    this.memberList = c._source.memberList;
    //    c._source.memberList.forEach(m => { m.name === 'Hayri' ? this.clanMember = m : false });
    // });
    //}
  }

public onChangeName(e : any): void  {
   let name = e.target.value;
    if(this.clan.memberList.find(m => m.name == name)) {
        this.memberList = this.clan.memberList.filter(m => m.name == name);
    }
    else {
      this.memberList = this.clan.memberList;
    }
  }

  public onChangeClan(): void {
    var tagValue = this.tag as string;
    if(tagValue.startsWith('#')) {
      tagValue = tagValue.substr(1);
    }
    this.setClan(1, tagValue);
  }
}