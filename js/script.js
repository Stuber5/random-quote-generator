document.addEventListener('DOMContentLoaded', function() {
    const quoteText = document.getElementById('text');
    const quoteAuthor = document.getElementById('author');
    const newQuoteButton = document.getElementById('new-quote');
    const tweetQuoteButton = document.getElementById('tweet-quote');

    function fetchQuote() {
        axios.get('https://api.quotable.io/random')
            .then(response => {
                const data = response.data;
                quoteText.innerText = data.content;
                quoteAuthor.innerText = `- ${data.author}`;
                tweetQuoteButton.href = `https://twitter.com/intent/tweet?text=${encodeURIComponent(`"${data.content}" - ${data.author}`)}`;
            })
            .catch(error => {
                console.error('Error fetching the quote', error);
                quoteText.innerText = 'An error occurred. Please try again.';
                quoteAuthor.innerText = '';
            });
    }

    newQuoteButton.addEventListener('click', fetchQuote);

    // Fetch the initial quote
    fetchQuote();
});
