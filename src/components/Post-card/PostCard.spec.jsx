import { PostCard } from ".";
import { postCardPropsMock } from "./mock";

const { render, screen } = require("@testing-library/react");

const props = postCardPropsMock;

describe("<PostCard />", () => {
    it("should render PostCard correctly", () => {
        render(<PostCard {...props} />);

        expect(screen.getByAltText(/title 1/i)).toHaveAttribute(
            "src",
            "img/img.png"
        );
        expect(screen.getByText("body 1")).toBeInTheDocument();
    });

    it("should match snapshot", () => {
        const { container } = render(<PostCard {...props} />);
        expect(container.childNodes).toMatchSnapshot();
    });
});
