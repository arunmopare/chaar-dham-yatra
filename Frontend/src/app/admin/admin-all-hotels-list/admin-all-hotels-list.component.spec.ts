import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AdminAllHotelsListComponent } from './admin-all-hotels-list.component';

describe('AdminAllHotelsListComponent', () => {
  let component: AdminAllHotelsListComponent;
  let fixture: ComponentFixture<AdminAllHotelsListComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminAllHotelsListComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AdminAllHotelsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
