import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfomacionComponent } from './infomacion.component';

describe('InfomacionComponent', () => {
  let component: InfomacionComponent;
  let fixture: ComponentFixture<InfomacionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InfomacionComponent]
    });
    fixture = TestBed.createComponent(InfomacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
