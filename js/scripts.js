var pokemonList = [
    { name: 'Bulbasaur', height: 0.7, types:['grass', 'poison'] },
    { name: 'Charmander', height: 0.6, types: ['fire'] },
    { name: 'Squirtle', height: 0.5, types: ['water'] }
];

for (var i = 0; i < pokemonList.length; i++){
    if(pokemonList[i].height >= 0.7){
        document.write("Name: " + pokemonList[i].name + " (Height: " + pokemonList[i].height + ")" +"- Wow, that's big!" + "<br>");
        document.write("Type(s): " + pokemonList[i].types + "<br>");
    } 
    else{
        document.write("Name: " + pokemonList[i].name + " (Height: " + pokemonList[i].height + ")" + "<br>"); 
        document.write("Type(s): " + pokemonList[i].types + "<br>");
    }
}