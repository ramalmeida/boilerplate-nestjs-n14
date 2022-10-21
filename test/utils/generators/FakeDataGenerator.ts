export interface Generated<T> {
  ids?: string[];
  datas?: T[];
  id?: string;
  data?: T;
}
interface HasId {
  id: string;
}
export class FakeDataGenerator {
  static generate<T extends HasId>(cb: () => T, count = 1): Generated<T> {
    if (count > 1) {
      const datas: T[] = Array.from({ length: count }, cb);
      const ids = datas.map((data) => data.id);
      return {
        datas,
        ids,
      };
    }
    const data: T = cb();
    return {
      id: data.id,
      data,
    };
  }
}
