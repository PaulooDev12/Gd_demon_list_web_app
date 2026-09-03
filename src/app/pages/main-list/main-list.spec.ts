import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MainList } from './main-list';

describe('MainList', () => {
  let component: MainList;
  let fixture: ComponentFixture<MainList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainList],
    }).compileComponents();

    fixture = TestBed.createComponent(MainList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
