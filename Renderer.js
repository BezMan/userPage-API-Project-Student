// Fill in the functions for your Renderer Class

class Renderer {
    _renderUser(allUsers) {
        let user = allUsers.results[0]

        const source = $("#user-template").html()
        const template = Handlebars.compile(source)

        const render = function (person) {
            let someHtml = template(person)
            $(".user-container").append(someHtml)
         
        }
        render({picture: user.picture.large, 
            name: `${user.name.first} ${user.name.last}`,
            address: `${user.location.city}, ${user.location.country}`
        })
    }

    _renderFriends(allUsers) {
        allUsers.results.splice(0,1)
        let friends = allUsers.results.map(user => user.name)
        console.log(friends);

        const source = $("#friends-template").html()
        const template = Handlebars.compile(source)

        const render = function (friends) {
            let someHtml = template({items: friends})
            $(".friends").append(someHtml)
         
        }
        // render({name: `${user.name.first} ${user.name.last}` })
        render(friends)



    }

    _renderQuote(quoteInfo) {

    }

    _renderPokemon(pokemonInfo) {

    }

    _renderMeat(meatText) {

    }

    render(data){
        //invokes all the individual _render methods
        this._renderUser(data.users)
        this._renderFriends(data.users)
        // this._renderUsers(data.quoteInfo)
        // this._renderUsers(data.pokemonInfo)
        // this._renderUsers(data.meatText)
    }
}

