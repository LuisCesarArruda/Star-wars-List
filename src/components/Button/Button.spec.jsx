import userEvent from "@testing-library/user-event"
import  {Button} from "./index"

const { render, screen, fireEvent } = require("@testing-library/react")

describe("<Button/>", ()=>{

    it("should render the button with the text", ()=>{
        render(<Button text="load more"/>)

        const button = screen.getByRole("button",{name: /load more/i})

        expect(button).toBeInTheDocument()
    })

    it("Should call function on button click", () =>{
        const fn = jest.fn();

        render(<Button text= "load more" onClick={fn}/>)

        const button = screen.getByRole("button", {name: /load more/i})
        
        userEvent.click(button)

        expect(fn).toHaveBeenCalledTimes(1)

    })

    it("Should be disabled when disabled is true", () =>{

        //TODO
        render(<Button text= "load more" disabled= {true}/>)

        const button = screen.getByRole("button", )
    })
})