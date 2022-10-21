export interface GeneratedDto<T> {
  datas?: T[];
  data?: T;
}
export class FakeDtoGenerator {
  static generate<T>(cb: () => T, count = 1): GeneratedDto<T> {
    if (count > 1) {
      const datas: T[] = Array.from({ length: count }, cb);
      return {
        datas,
      };
    }
    const data: T = cb();
    return {
      data,
    };
  }
}
