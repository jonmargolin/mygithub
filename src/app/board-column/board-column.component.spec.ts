import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardColumnComponent } from './board-column.component';
import { CdkDrag } from '@angular/cdk/drag-drop';

describe('BoardColumnComponent', () => {
  let component: BoardColumnComponent;
  let fixture: ComponentFixture<BoardColumnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BoardColumnComponent, CdkDrag],
    }).compileComponents();

    fixture = TestBed.createComponent(BoardColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
