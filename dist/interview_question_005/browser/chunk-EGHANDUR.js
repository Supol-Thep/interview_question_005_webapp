import {
  HttpClient,
  Injectable,
  inject,
  map,
  setClassMetadata,
  ɵɵdefineInjectable
} from "./chunk-VIBHUCCY.js";

// src/app/service/queue.service.ts
var QueueService = class _QueueService {
  http = inject(HttpClient);
  baseUrl = "https://localhost:44337/api/Queue";
  newQueue() {
    return this.toItem(this.http.post(`${this.baseUrl}/newqueue`, null));
  }
  getCurrentQueue() {
    return this.toItem(this.http.get(`${this.baseUrl}/getcurrentqueue`));
  }
  // สนใจแค่ว่าล้างสำเร็จหรือไม่ จึงไม่บังคับให้ response มี data
  clearQueue() {
    return this.http.post(`${this.baseUrl}/clearqueue`, null).pipe(map((res) => {
      if (res.code !== "200") {
        throw new Error(res.msg);
      }
    }));
  }
  toItem(response) {
    return response.pipe(map((res) => {
      const item = res.data?.[0];
      if (res.code !== "200" || !item) {
        throw new Error(res.msg);
      }
      return item;
    }));
  }
  static \u0275fac = function QueueService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _QueueService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _QueueService, factory: _QueueService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(QueueService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

export {
  QueueService
};
//# sourceMappingURL=chunk-EGHANDUR.js.map
