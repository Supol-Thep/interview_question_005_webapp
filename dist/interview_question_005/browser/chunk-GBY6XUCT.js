import {
  Component,
  DatePipe,
  Router,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomListener,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate2
} from "./chunk-VIBHUCCY.js";

// src/app/myqueue/it0502/it0502.component.ts
var IT0502Component = class _IT0502Component {
  router = inject(Router);
  // ข้อมูลที่ได้จาก newqueue ซึ่งหน้า IT 05-1 ส่งมากับ navigation
  item = history.state?.item;
  ngOnInit() {
    if (!this.item) {
      this.back();
    }
  }
  back() {
    this.router.navigate([""]);
  }
  static \u0275fac = function IT0502Component_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _IT0502Component)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _IT0502Component, selectors: [["app-it0502"]], decls: 14, vars: 9, consts: [[1, "container-fluid", "vh-100", "d-flex", "flex-column", "p-0"], [1, "bg-success", "text-center", "py-2", "border-bottom", "border-dark"], [1, "flex-grow-1", "d-flex", "flex-column", "align-items-center", "justify-content-center", "text-center", "gap-3"], [1, "display-1", "fw-bold", 2, "font-size", "8rem"], ["type", "button", 1, "btn", "btn-primary", "px-5", 3, "click"]], template: function IT0502Component_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "div", 0)(1, "div", 1);
      \u0275\u0275text(2, "IT 05-2");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(3, "div", 2)(4, "h4");
      \u0275\u0275text(5, "\u0E2B\u0E21\u0E32\u0E22\u0E40\u0E25\u0E02\u0E04\u0E34\u0E27");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(6, "div", 3);
      \u0275\u0275text(7);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(8, "div");
      \u0275\u0275text(9);
      \u0275\u0275pipe(10, "date");
      \u0275\u0275pipe(11, "date");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(12, "button", 4);
      \u0275\u0275domListener("click", function IT0502Component_Template_button_click_12_listener() {
        return ctx.back();
      });
      \u0275\u0275text(13, "\u0E01\u0E25\u0E31\u0E1A\u0E44\u0E1B\u0E2B\u0E19\u0E49\u0E32\u0E23\u0E31\u0E1A\u0E1A\u0E31\u0E15\u0E23\u0E04\u0E34\u0E27");
      \u0275\u0275domElementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(7);
      \u0275\u0275textInterpolate(ctx.item == null ? null : ctx.item.queueNumber);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate2("\u0E27\u0E31\u0E19\u0E17\u0E35\u0E48 ", \u0275\u0275pipeBind2(10, 3, ctx.item == null ? null : ctx.item.issuedAt, "dd/MM/yyyy"), " : \u0E40\u0E27\u0E25\u0E32 ", \u0275\u0275pipeBind2(11, 6, ctx.item == null ? null : ctx.item.issuedAt, "HH:mm"), " \u0E19.");
    }
  }, dependencies: [DatePipe], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IT0502Component, [{
    type: Component,
    args: [{ selector: "app-it0502", imports: [DatePipe], template: `<div class="container-fluid vh-100 d-flex flex-column p-0">
    <div class="bg-success text-center py-2 border-bottom border-dark">IT 05-2</div>

    <div class="flex-grow-1 d-flex flex-column align-items-center justify-content-center text-center gap-3">
      <h4>\u0E2B\u0E21\u0E32\u0E22\u0E40\u0E25\u0E02\u0E04\u0E34\u0E27</h4>
      <div class="display-1 fw-bold" style="font-size:8rem">{{ item?.queueNumber }}</div>
      <div>\u0E27\u0E31\u0E19\u0E17\u0E35\u0E48 {{ item?.issuedAt | date: 'dd/MM/yyyy' }} : \u0E40\u0E27\u0E25\u0E32 {{ item?.issuedAt | date: 'HH:mm' }} \u0E19.</div>
      <button type="button" class="btn btn-primary px-5" (click)="back()">\u0E01\u0E25\u0E31\u0E1A\u0E44\u0E1B\u0E2B\u0E19\u0E49\u0E32\u0E23\u0E31\u0E1A\u0E1A\u0E31\u0E15\u0E23\u0E04\u0E34\u0E27</button>
    </div>
  </div>
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(IT0502Component, { className: "IT0502Component", filePath: "src/app/myqueue/it0502/it0502.component.ts", lineNumber: 13 });
})();
export {
  IT0502Component
};
//# sourceMappingURL=chunk-GBY6XUCT.js.map
