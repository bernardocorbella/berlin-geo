import getPopupString from "./getPopupString";

describe("getPopupString", () => {
  it("produces a HTML string for the popup", () => {
    expect(
      getPopupString({
        name: "a",
        population: "b",
        averageAge: "c",
        area: "d",
        ring: "e"
      })
    ).toEqual(
      `<p>Name: <span>a</span></p><p>Population: <span>b</span></p><p>Average age: <span>c</span></p><p>Area: <span>d km<sup>2</sup></span></p><p>Ring: <span>e km<sup>2</sup></span></p>`
    );
  });
});
