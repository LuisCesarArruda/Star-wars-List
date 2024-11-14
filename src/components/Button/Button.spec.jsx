import userEvent from "@testing-library/user-event"
import  {Button} from "./index"

const { render, screen } = require("@testing-library/react")

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

        render(<Button text= "load more" disabled= {true}/>)

        const button = screen.getByRole("button", {name: /load more/i} )
        expect(button).toBeDisabled()
    })

    it("Should match snapshot", () =>{

        const fn = jest.fn()

        const {container}=render(<Button text= "load more" onClick={fn} disabled= {true}/>)

        expect(container.childNodes).toMatchSnapshot()
    })
})