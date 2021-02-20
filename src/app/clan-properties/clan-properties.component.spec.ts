import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClanPropertiesComponent } from './clan-properties.component';

describe('ClanPropertiesComponent', () => {
  let component: ClanPropertiesComponent;
  let fixture: ComponentFixture<ClanPropertiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClanPropertiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClanPropertiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
