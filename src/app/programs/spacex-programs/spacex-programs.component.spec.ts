import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpacexProgramsComponent } from './spacex-programs.component';

describe('SpacexProgramsComponent', () => {
  let component: SpacexProgramsComponent;
  let fixture: ComponentFixture<SpacexProgramsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpacexProgramsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpacexProgramsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
