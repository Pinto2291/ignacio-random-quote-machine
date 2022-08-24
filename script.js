const textBox = document.getElementById('text');
const authorBox = document.getElementById('author');

const allQuotes = [
    {
        quote:'If you’re going through hell, keep going',
        author: 'Winston Churchill'
    },

    {
        quote: "Don’t be afraid to give up the good to go for the great",
        author: 'John D. Rockefeller'
    },
        
    {   
        quote: 'Do what you can, with what you have, where you are',
        author: 'Teddy Roosevelt'
    },
    {
        quote: 'That which does not kill us makes us stronger',
        author: 'Friedrich Nietzsche'
    },
    {
        quote: 'Whether you think you can or you think you can’t, you’re right',
        author: 'Henry Ford',
    },
    {
        quote: 'We have nothing to fear but fear itself',
        author: 'Franklin D. Roosevelt'
    },
    {
        quote: 'If you tell the truth, you don’t have to remember anything',
        author: 'Mark Twain'
    },
    {
        quote: 'Power tends to corrupt, and absolute power corrupts absolutely',
        author: 'John Dalberg-Acton'
    },
];

const allColors = ['#797a7a', '#2cf5e7', '#4969f5', '#9949f5', '#f79d43'];

const changeColor = () => {
    let max = allColors.length;
    let randomColor = Math.floor(Math.random() * (max)) + 0;
    let colorText = document.getElementById('text');
    let colorAuthor = document.getElementById('author');
    let colorBody = document.getElementById('body-tag');
    let colorCounter = document.getElementById('counterBox');

    return (
        (colorText.style.color = allColors[randomColor]),
        (colorAuthor.style.color = allColors[randomColor]),
        (colorBody.style.backgroundColor = allColors[randomColor]),
        (colorCounter.style.color = allColors[randomColor])
    )
};

const counter = (n) => {
    let counterBox = document.getElementById('counterBox');
    return counterBox.innerText = n;
};

const produceQuote = () => {
   
    let max = allQuotes.length; 
    let randomNumber = Math.floor(Math.random() * (max)) + 0;
    let randomQuote = allQuotes[randomNumber];
    let twitterText = document.getElementById('text').innerHTML;
    let twitterAuthor = document.getElementById('author').innerHTML;
    let apiTweet = 'https://twitter.com/intent/tweet?hashtags=quotes&amp;related=freecodecamp&text="'; 

    let quoteGeneration = twitterText.replace(/ /g, '%20');
    let authorGeneration = twitterAuthor.replace(/ /g, '%20');
    let newHref = apiTweet + quoteGeneration + '"' + ' - ' + authorGeneration;

    document.getElementById('tweet-quote').href = newHref;
    
    return (textBox.innerText = randomQuote.quote, authorBox.innerText = randomQuote.author), counter(randomNumber), changeColor();
};

const start = () => produceQuote();

window.onload = start();