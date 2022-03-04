
var pokemonRepository = (function(){
    var pokemonList = [
        { Name: 'Bulbasaur', Height: 0.7, Type:['grass', ' poison'] },
        { Name: 'Charmander', Height: 0.6, Type: ['fire'] },
        { Name: 'Squirtle', Height: 0.5, Type: ['water'] }
    ]

    function add(pokemon){
        if(
            typeof pokemon === 'object' &&
            'Name' in pokemon &&
            'Height' in pokemon &&
            'Type' in pokemon
            ) {
                return pokemonList.push(pokemon);
            }  
            else {
                alert('Please enter all the required fields.');
            } 
    }

    function getAll(){
        return pokemonList;
    }

    function showDetails(){}
    
    function addListItem(pokemon){
        var pokemonContainer = document.querySelector('.pokemon-list');
        var listPokemon = document.createElement('li');
        var button = document.createElement('button');
        button.classList.add('pokemon-name');
        button.innerText = pokemon.Name;
        button.addEventListener('click', function showDetails(){
            console.log(pokemon);
        });
        listPokemon.appendChild(button);
        pokemonContainer.appendChild(listPokemon);
    }


    return{
        getAll: getAll,
        add: add,
        addListItem: addListItem,
        showDetails: showDetails
    };

})();

//test to add pokemon
pokemonRepository.add({ Name: "Pikachu", Height: 0.3, Type: ["electric"] });

pokemonRepository.getAll().forEach(function(pokemon){
    pokemonRepository.addListItem(pokemon);
});




   /* pokemonRepository.getAll().forEach( function(trait){
        document.write(
            Object.keys(trait) + Object.values(trait)
        );
       // document.write(trait[Object.keys(trait)[0]]);
    });*/

/*)
pokemonRepository.getAll().forEach(function(property){
    Object.keys(property).forEach(function(stats){
        var pokemonContainer = document.querySelector('.pokemon-list');
        var listItem = document.createElement('li');
        var button = document.createElement('button');
        button.innerText = 'ah';
        console.log(button.innertext);
        button.classList.add('pokemonButton');
        
        listItem.appendChild(button);
        pokemonContainer.appendChild(listItem);
    });
});
*/
