import {
  QueueService
} from "./chunk-EGHANDUR.js";
import {
  Component,
  Router,
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

// src/app/myqueue/it0501/it0501.component.ts
function IT0501Component_Conditional_6_Template(rf, ctx) {
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
var IT0501Component = class _IT0501Component {
  router = inject(Router);
  queueService = inject(QueueService);
  loading = signal(false, ...ngDevMode ? [{ debugName: "loading" }] : (
    /* istanbul ignore next */
    []
  ));
  error = signal("", ...ngDevMode ? [{ debugName: "error" }] : (
    /* istanbul ignore next */
    []
  ));
  goIt0502() {
    this.callThenShow(this.queueService.newQueue(), "/it0502");
  }
  goIt0503() {
    this.callThenShow(this.queueService.getCurrentQueue(), "/it0503");
  }
  callThenShow(request, path) {
    this.loading.set(true);
    this.error.set("");
    request.subscribe({
      next: (item) => this.router.navigate([path], { state: { item } }),
      error: () => {
        this.loading.set(false);
        this.error.set("\u0E44\u0E21\u0E48\u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E17\u0E33\u0E23\u0E32\u0E22\u0E01\u0E32\u0E23\u0E44\u0E14\u0E49 \u0E01\u0E23\u0E38\u0E13\u0E32\u0E25\u0E2D\u0E07\u0E43\u0E2B\u0E21\u0E48\u0E2D\u0E35\u0E01\u0E04\u0E23\u0E31\u0E49\u0E07");
      }
    });
  }
  static \u0275fac = function IT0501Component_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _IT0501Component)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _IT0501Component, selectors: [["app-it0501"]], decls: 9, vars: 3, consts: [[1, "container-fluid", "vh-100", "d-flex", "flex-column", "p-0"], [1, "bg-success", "text-center", "py-2", "border-bottom", "border-dark"], [1, "flex-grow-1", "d-flex", "flex-column", "align-items-center", "justify-content-between", "py-5"], ["type", "button", 1, "btn", "btn-primary", "btn-lg", "rounded-5", "px-5", "py-4", "fs-1", "fw-bold", "shadow", 3, "click", "disabled"], ["role", "alert", 1, "alert", "alert-danger"], ["type", "button", 1, "btn", "btn-secondary", "px-5", 3, "click", "disabled"]], template: function IT0501Component_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "div", 0)(1, "div", 1);
      \u0275\u0275text(2, "IT 05-1");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(3, "div", 2)(4, "button", 3);
      \u0275\u0275domListener("click", function IT0501Component_Template_button_click_4_listener() {
        return ctx.goIt0502();
      });
      \u0275\u0275text(5, "\u0E23\u0E31\u0E1A\u0E1A\u0E31\u0E15\u0E23\u0E04\u0E34\u0E27");
      \u0275\u0275domElementEnd();
      \u0275\u0275conditionalCreate(6, IT0501Component_Conditional_6_Template, 2, 1, "div", 4);
      \u0275\u0275domElementStart(7, "button", 5);
      \u0275\u0275domListener("click", function IT0501Component_Template_button_click_7_listener() {
        return ctx.goIt0503();
      });
      \u0275\u0275text(8, "\u0E25\u0E49\u0E32\u0E07\u0E04\u0E34\u0E27");
      \u0275\u0275domElementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(4);
      \u0275\u0275domProperty("disabled", ctx.loading());
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.error() ? 6 : -1);
      \u0275\u0275advance();
      \u0275\u0275domProperty("disabled", ctx.loading());
    }
  }, encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IT0501Component, [{
    type: Component,
    args: [{ selector: "app-it0501", imports: [], template: '<div class="container-fluid vh-100 d-flex flex-column p-0">\n    <div class="bg-success text-center py-2 border-bottom border-dark">IT 05-1</div>\n\n    <div class="flex-grow-1 d-flex flex-column align-items-center justify-content-between py-5">\n      <button type="button" class="btn btn-primary btn-lg rounded-5 px-5 py-4 fs-1 fw-bold shadow"\n           [disabled]="loading()" (click)="goIt0502()">\u0E23\u0E31\u0E1A\u0E1A\u0E31\u0E15\u0E23\u0E04\u0E34\u0E27</button>\n      @if (error()) {\n        <div class="alert alert-danger" role="alert">{{ error() }}</div>\n      }\n      <button type="button" class="btn btn-secondary px-5" [disabled]="loading()" (click)="goIt0503()">\u0E25\u0E49\u0E32\u0E07\u0E04\u0E34\u0E27</button>\n    </div>\n  </div>\n' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(IT0501Component, { className: "IT0501Component", filePath: "src/app/myqueue/it0501/it0501.component.ts", lineNumber: 14 });
})();
export {
  IT0501Component
};
//# sourceMappingURL=chunk-42QIFFLP.js.map
