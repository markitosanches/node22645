import AbstractView from "./AbstractView.js"

export default class extends AbstractView {

    constructor(params){
        super(params)
        this.setTitle('Posts')
    }

    async getHtml() {

        async function getData(url) {
            const response = await fetch(url)
            return response.json()
        }

        const data = await getData('/static/data/posts.json')

        const post_id = Number(this.params.id)

        const post = data.find(item => item.id === post_id)
        
        return `
        <h1>${post.title}</h1>
        <p>${post.descr}</p>
        <a href="/posts" data-link>Retour</a>
        `
    }
}