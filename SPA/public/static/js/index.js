//4
import Dashboard from "./views/Dashboard.js"
import Posts from "./views/Posts.js"
import Settings from "./views/Settings.js"

//1
const router = async () => {
    const routes = [
        { path: "/", view: Dashboard},
        { path: "/posts", view: Posts},
        { path: "/settings", view: Settings},
    ]
    
    //console.log(potentialMatches)
   
    //1.2 match function
   const potentialMatches = routes.map(route => {
    return {
        route: route,
        isMatch: location.pathname === route.path
    }
   })

   //console.log(potentialMatches)
   //1.3
   let match = potentialMatches.find(potentialMatch => potentialMatch.isMatch)

   if(!match) {
    match = {
        route: routes[0],
        isMatch: true
    }
   }
   
   
  //console.log(match.route.view())
  //1.4
  //document.querySelector("#app").innerHTML = match.route.view
  //1.5
  const view = new match.route.view
  document.querySelector("#app").innerHTML = await view.getHtml()
}

//3
const navigateTo = url => {
    history.pushState(null, null, url)
    router()
}


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

