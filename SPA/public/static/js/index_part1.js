//1
const router = async () => {
    const routes = [
        { path: "/", view: "Dash"},
        { path: "/posts", view: "Posts"},
        { path: "/settings", view: "Settigs"},
    ]
    
    //console.log(potentialMatches)
   
    //2 match function
   const potentialMatches = routes.map(route => {
    return {
        route: route,
        isMatch: location.pathname === route.path
    }
   })

   //console.log(potentialMatches)
   //3
   let match = potentialMatches.find(potentialMatch => potentialMatch.isMatch)

   if(!match) {
    match = {
        route: routes[0],
        isMatch: true
    }
   }
   
  //console.log(match.route.view())
  document.querySelector("#app").innerHTML = match.route.view
}

const navigateTo = url => {
    history.pushState(null, null, url)
    router()
}


document.addEventListener("DOMContentLoaded", () => {
    document.body.addEventListener('click', e => {
        if(e.target.matches("[data-link]")){
            e.preventDefault()
            navigateTo(e.target.href)
        }
    }) 
    //router();
});

