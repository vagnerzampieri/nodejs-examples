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

// Promise
describe("#fetchUser", () => {
  describe("when call name", () => {
    test("returns Leanne Graham", () => {
      expect.assertions(1);
      return functions.fetchUser().then(data => {
        expect(data.name).toEqual("Leanne Graham");
      });
    });
  });
});

// Async / await
describe("#fetchUser", () => {
  describe("when call name", () => {
    test("returns Leanne Graham", async () => {
      expect.assertions(1);
      const data = await functions.fetchUser();
      expect(data.name).toEqual("Leanne Graham");
    });
  });
});
