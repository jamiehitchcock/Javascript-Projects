// aysnc fucntion to fetch stock data from API
async function getStockData(){
    // declare button
    const btn = document.getElementById("btn");

    // declare symbol from input
    const symbol = document.getElementById("input").value.toUpperCase();

    // declare output
    const output = document.getElementById("output");

    // IMPORTANT - Get your own free API token from https://www.stockdata.org/
    const apiToken = 'N9cbbcb2mG2PtsxzoKTbfAp7DY1HwBoCq5R8sy2O';

    // declare the url using api link, symbol and token


    // let apiUrl = "https://api.stockdata.org/v1/data/quote?symbols="+ symbol +"&api_token=" + apiToken;


    let apiUrl = "https://api.stockdata.org/v1/data/quote?symbols=tsla&api_token=N9cbbcb2mG2PtsxzoKTbfAp7DY1HwBoCq5R8sy2O";





    

    // return the fetched promise as json
    return (await fetch(apiUrl)).json();



    





};




// run function when button is clicked
btn.addEventListener("click", async() => {
    
    
    
    
    let stockData = [];

    try{
        stockData = await getStockData();
    } catch(e){
        console.log("Error!");
        console.log(e);
    }

    console.log(stockData);

    let stock = stockData["data"][0];
    let name = stock["name"];
    let ticker = stock["ticker"];
    let exchange = stock["exchange_short"];
    let price = stock["price"];
    let currency = stock["currency"];
    let previous = stock["previous_close_price"];
    let change = stock["day_change"]+"%";
     



     console.log(stock);
     console.log(`name is ${name}`);
     console.log(`ticker is ${ticker}`);
     console.log(`exchange is ${exchange}`);
     console.log(`price is ${price} ${currency}`);
     console.log(`previous is ${previous} ${currency}`);
     console.log(`change is ${change}`);


     
});

