import  {Button} from "./index"

const { render, screen } = require("@testing-library/react")

describe("<Button/>", ()=>{

    it("should render the button with the text", ()=>{
        render(<Button/>)

        const Button = screen.getByRole()
    })
})