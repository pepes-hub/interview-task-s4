// test amount format with jest

import { amountFormat } from "./amountFormat";

describe("amountFormat", () => {
  it("should return a string with a dollar sign", () => {
    expect(amountFormat(0)).toEqual("$0");
    expect(amountFormat(100)).toEqual("$100");
    expect(amountFormat(100.24)).toEqual("$100.24");
  });

  it("should return a formatted string for big amounts", () => {
    expect(amountFormat(1234)).toEqual("$1,234");
    expect(amountFormat(1234.45)).toEqual("$1,234.45");
  });
});
