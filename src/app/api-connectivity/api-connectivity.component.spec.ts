import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiConnectivityComponent } from './api-connectivity.component';

describe('ApiConnectivityComponent', () => {
  let component: ApiConnectivityComponent;
  let fixture: ComponentFixture<ApiConnectivityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApiConnectivityComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApiConnectivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
