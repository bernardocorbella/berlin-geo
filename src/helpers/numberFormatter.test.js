import numberFormatter from "./numberFormatter";

describe("numberFormatter", () => {
  it("formats a number", () => {
    expect(numberFormatter(123456.789)).toEqual("123,456.79");
    expect(numberFormatter(1000000)).toEqual("1,000,000");
  });
});
