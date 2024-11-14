import { render,screen } from "@testing-library/react"


import {Posts} from "./"

const props ={
    post:  [
    {
        id: 1,
        name: "nome 1",
        gender: "gender 1",
        imagem: "img/img1.png"
    },
    {
        id: 2,
        name: "nome 2",
        gender: "gender 2",
        imagem: "img/img2.png"
    },
    {
        id: 3,
        name: "nome 3",
        gender: "gender 3",
        imagem: "img/img3.png"
    }

    ]
}

describe("<Posts/>", ()=>{
    it("Should render Posts", () =>{
        render(<Posts {...props}/>)

        expect(screen.getAllByText("name",{name:/title 1/i})).toHaveLength(3)
    })
})