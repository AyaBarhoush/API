async function getPizza() {
    const response = await fetch(`https://forkify-api.herokuapp.com/api/search?q=pizza`);
    const data = await response.json();
    const recipes = data.recipes;

    const result = recipes.map(function(menu){
        return `
        <div class= "menu">
        <img src = "${menu.image_url}"/>
        <h3>${menu.title}</h3>
        </div>
        `;
    }).join(" ");
    document.querySelector(".pizza .row").innerHTML = result ; 
  
}


getPizza();
