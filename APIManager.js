//This is the class that will manage all your APIs

class APIManager {
  constructor() {
    this.data = {};
    this.totalPokemons = 806
  }

  loadData() {
    //you should make all your API requests here
    //each request should update the `data` object accordingly

    this.fetchUsers(7)
    this.fetchRandomKanyeQuote()
    this.fetchRandomPokemonData(this.totalPokemons)
    this.fetchRandomText()
  }


  fetchUsers(numUsers) {
    $.ajax({
      context: this, //opens our access to - this
      url: `https://randomuser.me/api/?results=${numUsers}`,
      success: function(result) {
        this.data.users = result
        console.log(this.data.users)
      }
    });
  }

  fetchRandomKanyeQuote() {
    $.ajax({
      context: this, //opens our access to - this
      url: `https://api.kanye.rest/`,
      success: function(result) {
        this.data.quote = result
        console.log(this.data.quote)
      }
    });
  }

  fetchRandomPokemonData(totalPokes) {
    let id = Math.floor(Math.random() * totalPokes) + 1  
    $.ajax({
      context: this, //opens our access to - this
      url: `https://pokeapi.co/api/v2/pokemon/${id}/`,
      success: function(result) {
        // this.data.pokemonData = result.map(res => res.species.name);
        let pokemon = {name: result.species.name, image: result.sprites.front_default} 
        this.data.pokemonData = pokemon
        console.log(this.data.pokemonData)
      }
    });
  }

  fetchRandomText() {
    $.ajax({
      context: this, //opens our access to - this
      url: `https://baconipsum.com/api/?type=all-meat`,
      success: function(result) {
        // this.data.pokemonData = result.map(res => res.species.name);
        this.data.meatText = result
        console.log(this.data.meatText)
      }
    });
  }
  
  
}
