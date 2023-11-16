import { render, screen, fireEvent, waitFor, vi } from "@testing-library/react";
import { describe, it, expect} from "vitest";
import App, {
  storiesReducer,
  Item,
  List,
  SearchForm,
  InputWithLabel,
} from "./App";

const storyOne = {
  title: "React",
  url: "https://reactjs.org/",
  author: "Jordan Walke",
  num_comments: 3,
  points: 4,
  objectID: 0,
};

const storyTwo = {
  title: "Redux",
  url: "https://redux.js.org/",
  author: "Dan Abramov, Andrew Clark",
  num_comments: 2,
  points: 5,
  objectID: 1,
};
const stories = [storyOne, storyTwo];

describe("Item", () => {

  it("renders all properties", () => {
    render(<Item item={storyOne} />);
    expect(screen.getByText("Jordan Walke")).toBeInTheDocument();
    expect(screen.getByText("React")).toHaveAttribute(
      "href",
      "https://reactjs.org/"
    );
  });
  it("renders a clickable dismiss button", () => {
    render(<Item item={storyOne} />);
    expect(screen.getByRole("button")).toBeInTheDocument();
  });
});
describe("SearchForm", () => {
  const searchFormProps = {
    searchTerm: "React",
    onSearchInput: vi.fn(),
    onSearchSubmit: vi.fn(),
  };
  it("renders the input field with its value", () => {
    render(<SearchForm {...searchFormProps} />);
    screen.debug();
  });
});
