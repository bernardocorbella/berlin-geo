import getColorByAge from "./getColorByAge";

describe("getColorByAge", () => {
  it("return the correct color based on the average age", () => {
    expect(getColorByAge(30)).toEqual("#00cb09");
    expect(getColorByAge(40)).toEqual("#00cb09");

    expect(getColorByAge(41)).toEqual("#a4cb00");
    expect(getColorByAge(42)).toEqual("#a4cb00");

    expect(getColorByAge(43)).toEqual("#cb8a00");

    expect(getColorByAge(44)).toEqual("#cb4f00");
    expect(getColorByAge(45)).toEqual("#cb4f00");

    expect(getColorByAge(49)).toEqual("#cb0026");
    expect(getColorByAge(50)).toEqual("#cb0026");
    expect(getColorByAge(60)).toEqual(false);
  });
});
