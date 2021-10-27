import React from "react";

const CoinRow = ({
    image,
    name,
    symbol,
    price,
    volume,
    priceChange,
    marketcap,
}) => {
    return (
        <div className="coinRow">
            <div className="coin">
                <div className="coinData">
                    <div className="img-name-sym">
                        <img src={image} alt="." />
                        <span className="coinName">{name}</span>
                        <span className="coinSymbol">{symbol}</span>
                    </div>
                    <p className="coinPrice">${price}</p>
                    <div className="changePercent">
                        {priceChange < 0 ? (
                            <p className="percentRed">
                                {priceChange.toFixed(2)}%
                            </p>
                        ) : (
                            <p className="percentGreen">
                                {priceChange.toFixed(2)}%
                            </p>
                        )}
                    </div>
                    <p className="coinMarketcap">
                        ${marketcap.toLocaleString()}
                    </p>
                    <p className="coinVolume">${volume.toLocaleString()}</p>
                </div>
            </div>
        </div>
    );
};

export default CoinRow;
