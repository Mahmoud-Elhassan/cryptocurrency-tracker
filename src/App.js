import { React, useState, useEffect } from "react";
import axios from "axios";
// style and logos
import "./styles/App.scss";
import logo from "./logo.png";
// components
import CoinRow from "./components/CoinRow";

function App() {
    //
    const [coins, setCoins] = useState([]);
    const [search, setSearch] = useState("");
    //
    const changeHandler = (e) => {
        setSearch(e.target.value);
    };
    //
    useEffect(() => {
        axios
            .get(
                "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
            )
            .then((res) => {
                setCoins(res.data);
            })
            .catch((error) => console.log(error));
    });
    //
    const coinsFilter = coins.filter((coin) =>
        coin.name.toLowerCase().includes(search.toLowerCase())
    );
    return (
        <div className="App">
            <div className="header">
                <img src={logo} className="logo" alt="logo" />
                <div className="searchMainContainer">
                    <div className="searchContainer">
                        <input
                            type="text"
                            placeholder="Search..."
                            onChange={changeHandler}
                        />
                        <div className="search"></div>
                    </div>
                </div>
            </div>
            <div className="coinsContainer">
                <div className="containerHeader">
                    <div className="data">
                        <div className="name">Name</div>
                        <div className="price">Price</div>
                        <div className="change">Change(24h)</div>
                        <div className="marketCap">Market Cap</div>
                        <div className="volume">Volume(24h)</div>
                    </div>
                </div>
                {coinsFilter.map((coin) => {
                    return (
                        <CoinRow
                            key={coin.id}
                            image={coin.image}
                            name={coin.name}
                            symbol={coin.symbol}
                            price={coin.current_price}
                            volume={coin.total_volume}
                            marketcap={coin.market_cap}
                            priceChange={coin.price_change_percentage_24h}
                        />
                    );
                })}
            </div>
        </div>
    );
}

export default App;
