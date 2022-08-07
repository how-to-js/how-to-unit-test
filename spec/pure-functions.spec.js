import { greet } from "../pure-functions.js";

describe("greet", () => {
  it("should greet by name & surname", () => {
    expect(greet("Lorem", "Ipsum")).toEqual("Hello Lorem Ipsum!");
  });
});
