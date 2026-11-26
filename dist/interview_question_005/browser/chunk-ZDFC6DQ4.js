import {
  QueueService
} from "./chunk-EGHANDUR.js";
import {
  Component,
  Router,
  __spreadProps,
  __spreadValues,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomListener,
  ɵɵdomProperty,
  ɵɵnextContext,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-VIBHUCCY.js";

// src/app/myqueue/it0503/it0503.component.ts
function IT0503Component_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 4);
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.error());
  }
}
var IT0503Component = class _IT0503Component {
  router = inject(Router);
  queueService = inject(QueueService);
  // ข้อมูลที่ได้จาก getcurrentqueue ซึ่งหน้า IT 05-1 ส่งมากับ navigation
  item = signal(history.state?.item, ...ngDevMode ? [{ debugName: "item" }] : (
    /* istanbul ignore next */
    []
  ));
  loading = signal(false, ...ngDevMode ? [{ debugName: "loading" }] : (
    /* istanbul ignore next */
    []
  ));
  error = signal("", ...ngDevMode ? [{ debugName: "error" }] : (
    /* istanbul ignore next */
    []
  ));
  ngOnInit() {
    if (!this.item()) {
      this.back();
    }
  }
  clear() {
    this.loading.set(true);
    this.error.set("");
    this.queueService.clearQueue().subscribe({
      next: () => {
        const item = { seq: null, queueNumber: "00", issuedAt: null };
        this.item.set(item);
        history.replaceState(__spreadProps(__spreadValues({}, history.state), { item }), "");
        this.loading.set(false);
      },
      error: () => {
        this.loading.set(false);
        this.error.set("\u0E44\u0E21\u0E48\u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E25\u0E49\u0E32\u0E07\u0E04\u0E34\u0E27\u0E44\u0E14\u0E49 \u0E01\u0E23\u0E38\u0E13\u0E32\u0E25\u0E2D\u0E07\u0E43\u0E2B\u0E21\u0E48\u0E2D\u0E35\u0E01\u0E04\u0E23\u0E31\u0E49\u0E07");
      }
    });
  }
  back() {
    this.router.navigate([""]);
  }
  static \u0275fac = function IT0503Component_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _IT0503Component)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _IT0503Component, selectors: [["app-it0503"]], decls: 13, vars: 3, consts: [[1, "container-fluid", "vh-100", "d-flex", "flex-column", "p-0"], [1, "bg-success", "text-center", "py-2", "border-bottom", "border-dark"], [1, "flex-grow-1", "d-flex", "flex-column", "align-items-center", "justify-content-center", "text-center", "gap-3"], ["type", "button", 1, "btn", "btn-primary", "px-5", 3, "click", "disabled"], ["role", "alert", 1, "alert", "alert-danger"], [1, "display-1", "fw-bold", 2, "font-size", "8rem"], ["type", "button", 1, "btn", "btn-primary", "px-5", 3, "click"]], template: function IT0503Component_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "div", 0)(1, "div", 1);
      \u0275\u0275text(2, "IT 05-3");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(3, "div", 2)(4, "button", 3);
      \u0275\u0275domListener("click", function IT0503Component_Template_button_click_4_listener() {
        return ctx.clear();
      });
      \u0275\u0275text(5, "\u0E25\u0E49\u0E32\u0E07\u0E04\u0E34\u0E27");
      \u0275\u0275domElementEnd();
      \u0275\u0275conditionalCreate(6, IT0503Component_Conditional_6_Template, 2, 1, "div", 4);
      \u0275\u0275domElementStart(7, "h4");
      \u0275\u0275text(8, "\u0E2B\u0E21\u0E32\u0E22\u0E40\u0E25\u0E02\u0E04\u0E34\u0E27\u0E1B\u0E31\u0E08\u0E08\u0E38\u0E1A\u0E31\u0E19");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(9, "div", 5);
      \u0275\u0275text(10);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(11, "button", 6);
      \u0275\u0275domListener("click", function IT0503Component_Template_button_click_11_listener() {
        return ctx.back();
      });
      \u0275\u0275text(12, "\u0E01\u0E25\u0E31\u0E1A\u0E44\u0E1B\u0E2B\u0E19\u0E49\u0E32\u0E23\u0E31\u0E1A\u0E1A\u0E31\u0E15\u0E23\u0E04\u0E34\u0E27");
      \u0275\u0275domElementEnd()()();
    }
    if (rf & 2) {
      let tmp_2_0;
      \u0275\u0275advance(4);
      \u0275\u0275domProperty("disabled", ctx.loading());
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.error() ? 6 : -1);
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate((tmp_2_0 = ctx.item()) == null ? null : tmp_2_0.queueNumber);
    }
  }, encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IT0503Component, [{
    type: Component,
    args: [{ selector: "app-it0503", imports: [], template: '<div class="container-fluid vh-100 d-flex flex-column p-0">\n    <div class="bg-success text-center py-2 border-bottom border-dark">IT 05-3</div>\n\n    <div class="flex-grow-1 d-flex flex-column align-items-center justify-content-center text-center gap-3">\n      <button type="button" class="btn btn-primary px-5" [disabled]="loading()" (click)="clear()">\u0E25\u0E49\u0E32\u0E07\u0E04\u0E34\u0E27</button>\n      @if (error()) {\n        <div class="alert alert-danger" role="alert">{{ error() }}</div>\n      }\n      <h4>\u0E2B\u0E21\u0E32\u0E22\u0E40\u0E25\u0E02\u0E04\u0E34\u0E27\u0E1B\u0E31\u0E08\u0E08\u0E38\u0E1A\u0E31\u0E19</h4>\n      <div class="display-1 fw-bold" style="font-size:8rem">{{ item()?.queueNumber }}</div>\n      <button type="button" class="btn btn-primary px-5" (click)="back()">\u0E01\u0E25\u0E31\u0E1A\u0E44\u0E1B\u0E2B\u0E19\u0E49\u0E32\u0E23\u0E31\u0E1A\u0E1A\u0E31\u0E15\u0E23\u0E04\u0E34\u0E27</button>\n    </div>\n  </div>\n' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(IT0503Component, { className: "IT0503Component", filePath: "src/app/myqueue/it0503/it0503.component.ts", lineNumber: 13 });
})();
export {
  IT0503Component
};
//# sourceMappingURL=chunk-ZDFC6DQ4.js.map
