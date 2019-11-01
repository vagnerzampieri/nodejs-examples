import { functions } from "./functions";

describe("#add", () => {
  describe("when 2 + 2", () => {
    test("returns 4", () => {
      expect(functions.add(2, 2)).toBe(4);
    });
  });
});

describe("#isNull", () => {
  test("returns always null", () => {
    expect(functions.isNull()).toBeNull();
  });
});
