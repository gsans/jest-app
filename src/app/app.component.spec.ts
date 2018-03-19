import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { expect } from 'expect';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app');
  }));
  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to app!');
  }));
});

expect.extend({
  stringMatchingOrNull(received, regexp) {
    if (received === null) {
      return {
        pass: true,
        message: () => "String expected to be not null."
      };
    }

    // `this.isNot` indicates whether the assertion was inverted with `.not`
    // which needs to be respected, otherwise it fails incorrectly.
    if (this.isNot) {
      expect(received).not.toEqual(expect.stringMatching(regexp));
    } else {
      expect(received).toEqual(expect.stringMatching(regexp));
    }

    // This point is reached when the above assertion was successful.
    // The test should therefore always pass, that means it needs to be
    // `true` when used normally, and `false` when `.not` was used.
    return { pass: !this.isNot };
  }
});

describe("grouping", () => {
  test("111", () => {
    let expected = "xxxxxx";
    let regexp = /x/;
    expect(expected).toEqual(expect.stringMatching(regexp));
  });
  
  test("passes when it matches", () => {
    expect("xxxxxxxx").stringMatchingOrNull(/x/);
  });
  
  test("passes when it's null", () => {
    expect(null).stringMatchingOrNull(/x/);
  });
  
  test("fails when it doesn't match", () => {
    expect("yyyyyyyy").not.stringMatchingOrNull(/x/);
  });
  
  test.only("fails when negated but it matches", () => {
    expect("xxxxxxxx").not.stringMatchingOrNull(/x/);
  });
  
  test("fails when negated and it's null", () => {
    expect(null).not.stringMatchingOrNull(/x/);
  });
  
  test("passes when negated and it doesn't match", () => {
    expect("yyyyyyyy").not.stringMatchingOrNull(/x/);
  });
})

