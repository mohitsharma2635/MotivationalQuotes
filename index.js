setInterval(fetch_quotes, 20000);

function fetch_quotes() {
    fetch('https://api.quotable.io/quotes/random')
        .then(response => response.json())
        .then(data => {
            document.getElementById('result').innerHTML = data[0]['content']
            document.getElementById('result').className = ""
        });
}

fetch_quotes();