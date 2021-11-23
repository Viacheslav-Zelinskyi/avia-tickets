import { getCountries } from "../api";

it("Api test", () => {
  expect.assertions(1);
  return getCountries().then((countries) =>
    expect(countries.length > 0).toEqual(true)
  );
});
