import { render } from "@testing-library/react-native";

import HomeScreen from "@/app/index";

describe("<HomeScreen />", () => {
  it("Text renders correctly on HomeScreen", () => {
    const { getByText } = render(<HomeScreen />);

    expect(getByText("Hello from Ethereal Trident!!")).toBeTruthy();
  });
});
