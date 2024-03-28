import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { JsonPipe } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { TaskStore } from './board-store/borad.store';
describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent, JsonPipe, HttpClientModule],
      providers: [TaskStore],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have the 'my-github' title`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('my-github');
  });
});
