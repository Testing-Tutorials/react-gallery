/* Here we override axios.
Remember, because we've mocked axios , what we get back,
is not the reall axios, but the fake one.  */
import mockAxios from "axios";
import REACT_APP_UNSPLASH_TOKEN from "../../../react-token";

import unsplash from "../unsplash";

it("calls axios and returns images", async () => {
  /* We may separate the code in 3 sections */
  // 1. SET UP (sort of pre-test)
  /* mockAxios, has a `get` function 
  and because it's a jest mock function (check in axios.js the jest.fn(...)
  it has the mockImplementationOnce.
  Here we provide a new mock which is going to run just once.  */
  mockAxios.get.mockImplementationOnce(() =>
    Promise.resolve({
      data: {
        results: ["cute.jpg"],
      },
    })
  );

  // 2. ACTUALL WORK
  const images = await unsplash("kittens");

  // 3. ASSERTIONS 0R EXPECTS
  expect(images).toEqual(["cute.jpg"]);
  // console.log(images);

  expect(mockAxios.get).toHaveBeenCalledTimes(1);

  /* Look at the arguments/parameters that were passed to axios.  */
  expect(mockAxios.get).toHaveBeenCalledWith(
    "https://api.unsplash.com/search/photos",
    {
      params: {
        client_id: REACT_APP_UNSPLASH_TOKEN,
        query: "kittens",
      },
    }
  );
});
