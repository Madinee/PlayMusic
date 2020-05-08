import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListalbumPage } from './listalbum.page';

describe('ListalbumPage', () => {
  let component: ListalbumPage;
  let fixture: ComponentFixture<ListalbumPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListalbumPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListalbumPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
