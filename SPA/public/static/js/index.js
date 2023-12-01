//4
import Dashboard from "./views/Dashboard.js"
import Posts from "./views/Posts.js"
import PostView from "./views/PostView.js"
import Settings from "./views/Settings.js"

//5
const pathToRegex = path => new RegExp("^" + path.replace(/\//g, "\\/").replace(/:\w+/g, "(.+)")+ "$")

//6
const getParams = match => {
    const values = match.isMatch.slice(1);
    const keys = Array.from(match.route.path.matchAll(/:(\w+)/g)).map(isMatch =>isMatch[1])
    //console.log(Array.from(match.route.path.matchAll(/:(\w+)/g)))
    return Object.fromEntries(keys.map((key, i) => {
        return [key, values[i]]
    }))
}

//1
const router = async () => {
    //5.1
    //console.log(pathToRegex("/post-view/:id"))
    //console.log(location.pathname.split("/"))
    const routes = [
        { path: "/", view: Dashboard},
        { path: "/posts", view: Posts},
        { path: "/post-view/:id", view: PostView},
        { path: "/settings", view: Settings},
    ]
    
    //console.log(potentialMatches)
   
    //1.2 match function
   const potentialMatches = routes.map(route => {
    return {
        route: route,
        isMatch: location.pathname.match(pathToRegex(route.path))
    }
   })

  // console.log(potentialMatches)
   //1.3
   let match = potentialMatches.find(potentialMatch => potentialMatch.isMatch)

   if(!match) {
    match = {
        route: routes[0],
        isMatch: [location.pathname]
    }
   }
   
//console.log(match)
  //console.log(match.route.view())
  //1.4
  //document.querySelector("#app").innerHTML = match.route.view
  //1.5
  const view = new match.route.view(getParams(match))

  document.querySelector("#app").innerHTML = await view.getHtml()
}

//3
const navigateTo = url => {
    history.pushState(null, null, url)
    router()
}

//7
window.addEventListener("popstate", router)

//2
document.addEventListener("DOMContentLoaded", () => {
    document.body.addEventListener('click', e => {
        if(e.target.matches("[data-link]")){
            e.preventDefault()
            navigateTo(e.target.href)
        }
    }) 
    router();
});

