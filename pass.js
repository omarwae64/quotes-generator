function randomPass() {
    const characters = [
        { 'author': 'Jim Rohn', 'quote': 'Beware of what you become in pursuit of what you want.' },
        { 'author': 'Epictetus', 'quote': 'It\'s not what happens to you, but how you react to it that matters.' },
        { 'author': 'Frank Sinatra', 'quote': 'The best revenge is massive success.' },
        { 'author': 'Wayne Gretzky', 'quote': 'You miss 100% of the shots you don\'t take.' },
        { 'author': 'Nelson Mandela', 'quote': 'Resentment is like drinking poison and waiting for your enemies to die.' },
        { 'author': 'Elbert Hubbard', 'quote': 'Do not take life too seriously. You will not get out alive.' },
    ];

    // Generate a random index
    const randomIndex = Math.floor(Math.random() * characters.length);
    const selectedQuote = characters[randomIndex];

    // Update the content of the div with the quote and author
    document.getElementById("quote").innerHTML = 
        `"${selectedQuote.quote}"<br><span>- ${selectedQuote.author}</span>`;
}
