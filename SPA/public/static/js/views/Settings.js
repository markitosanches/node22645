import AbstractView from "./AbstractView.js"

export default class extends AbstractView {

    constructor(params){
        super(params)
        this.setTitle('Settings')
    }

    async getHtml() {
        return `
        <h1>Settings</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto soluta numquam repellendus eum nostrum laudantium, praesentium quis perferendis facere nulla dignissimos. Aut dolorum qui officiis blanditiis laboriosam voluptatem numquam cupiditate</p>
        `
    }
}