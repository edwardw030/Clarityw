let pokemonList = [
    { name: 'bulbsaur', height: '0.7', types: ['grass', 'poision'], weight: '6.9'},
    { name: 'charmander', height:'0.6', types: 'fire', weight:'8.5'},
    { name: 'squirtle', height: '0.5', types: 'water', weight: '9'},
    { name: 'pikachu', height: '0.4', types: 'electric', weight: '6'},
    { name: 'eevee', height: '0.3', types: 'normal', weight: '6.5'}
];

// for loop that iterates over each pokemon with height next to it with the condtion of height message
for (let i = 0; i < pokemonList.length; i++) {
    if(pokemonList[i].height > 0.6) {
        message = '-This is a big pokemon!';
    } else {
        message = '';
    }
    document.writeln (
        `${pokemonList[i].name} - (height: ${pokemonList[i].height}) ${message} <br> `
    );

}