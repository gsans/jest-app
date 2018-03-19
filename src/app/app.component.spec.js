"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var app_component_1 = require("./app.component");
var expect_1 = require("expect");
describe('AppComponent', function () {
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [
                app_component_1.AppComponent
            ],
        }).compileComponents();
    }));
    it('should create the app', testing_1.async(function () {
        var fixture = testing_1.TestBed.createComponent(app_component_1.AppComponent);
        var app = fixture.debugElement.componentInstance;
        expect_1.expect(app).toBeTruthy();
    }));
    it("should have as title 'app'", testing_1.async(function () {
        var fixture = testing_1.TestBed.createComponent(app_component_1.AppComponent);
        var app = fixture.debugElement.componentInstance;
        expect_1.expect(app.title).toEqual('app');
    }));
    it('should render title in a h1 tag', testing_1.async(function () {
        var fixture = testing_1.TestBed.createComponent(app_component_1.AppComponent);
        fixture.detectChanges();
        var compiled = fixture.debugElement.nativeElement;
        expect_1.expect(compiled.querySelector('h1').textContent).toContain('Welcome to app!');
    }));
});
expect_1.expect.extend({
    stringMatchingOrNull: function (received, regexp) {
        if (received === null) {
            return {
                pass: true,
                message: function () { return "String expected to be not null."; }
            };
        }
        // `this.isNot` indicates whether the assertion was inverted with `.not`
        // which needs to be respected, otherwise it fails incorrectly.
        if (this.isNot) {
            expect_1.expect(received).not.toEqual(expect_1.expect.stringMatching(regexp));
        }
        else {
            expect_1.expect(received).toEqual(expect_1.expect.stringMatching(regexp));
        }
        // This point is reached when the above assertion was successful.
        // The test should therefore always pass, that means it needs to be
        // `true` when used normally, and `false` when `.not` was used.
        return { pass: !this.isNot };
    }
});
describe("grouping", function () {
    test("111", function () {
        var expected = "xxxxxx";
        var regexp = /x/;
        expect_1.expect(expected).toEqual(expect_1.expect.stringMatching(regexp));
    });
    test("passes when it matches", function () {
        expect_1.expect("xxxxxxxx").stringMatchingOrNull(/x/);
    });
    test("passes when it's null", function () {
        expect_1.expect(null).stringMatchingOrNull(/x/);
    });
    test("fails when it doesn't match", function () {
        expect_1.expect("yyyyyyyy").not.stringMatchingOrNull(/x/);
    });
    test.only("fails when negated but it matches", function () {
        expect_1.expect("xxxxxxxx").not.stringMatchingOrNull(/x/);
    });
    test("fails when negated and it's null", function () {
        expect_1.expect(null).not.stringMatchingOrNull(/x/);
    });
    test("passes when negated and it doesn't match", function () {
        expect_1.expect("yyyyyyyy").not.stringMatchingOrNull(/x/);
    });
});
//# sourceMappingURL=app.component.spec.js.map