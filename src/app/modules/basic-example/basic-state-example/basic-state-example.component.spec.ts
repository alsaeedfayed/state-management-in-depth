import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicStateExampleComponent } from './basic-state-example.component';

describe('BasicStateExampleComponent', () => {
  let component: BasicStateExampleComponent;
  let fixture: ComponentFixture<BasicStateExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BasicStateExampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BasicStateExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
