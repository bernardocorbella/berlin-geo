import getPopupString from "./getPopupString";

describe("getPopupString", () => {
  it("produces a HTML string for the popup", () => {
    expect(
      getPopupString({
        name: "Mitte",
        population: 368122,
        averageAge: 38.9
      })
    ).toEqual(
      `<p>Name: <span>Mitte</span></p><p>Population: <span>368122</span></p><p>Average age: <span>38.9</span></p>`
    );
  });
});
