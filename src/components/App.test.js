import App from "./App";
import { shallow } from "enzyme";

jest.mock("../services/unsplash.js");

it("fetches images form unsplash and renders them on mount", (done) => {
  const wrapper = shallow(<App />);

  const state = wrapper.instance().state;
  expect(state.status).toEqual("searching");

  /* We need to wait for the promise to resolve.
  In JS we want to wait for the next process, the next tick.
  So we use a setTimeout  */
  setTimeout(() => {
    wrapper.update();
    const state = wrapper.instance().state;
    console.log("runs");
    expect(state.term).toEqual("Mountains");
    expect(state.status).toEqual("done");
    expect(state.images.length).toEqual(1);

    expect(wrapper.find("Image").length).toEqual(1);
    done(); // without done(), code in here, the setTimeout, does not run.
  });
});
