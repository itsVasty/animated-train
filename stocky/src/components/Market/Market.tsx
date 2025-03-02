import React, { FC } from 'react';
import styles from './Market.module.css';

const STOCKS = [
  {currency: "USD", buyingPrice: "R16.40", sellingPrice: "R17.40"},
  {currency: "GBP", buyingPrice: "R20.12", sellingPrice: "R22.40"}
];

interface MarketProps {}

function StockTable({stocks} : any){
  const rows : any = []
  stocks.forEach((stock : any) => {
    rows.push(<StockRow stock={stock}/>)
  })

  return(
    <table>
      <thead>
        <tr>
          <th>Cuurency</th>
          <th>Buying Price</th>
          <th>Selling Price</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  )
}

function StockRow({stock} : any){
  return(
    <tr>
      <td>
        {stock.currency}
      </td>
      <td>
        {stock.buyingPrice}
      </td>
      <td>
        {stock.sellingPrice}
      </td>
    </tr>
  )
}



const Market: FC<MarketProps> = () => {

  return (
    <div className={styles.Market}>
      <h1>Market</h1>
      <StockTable stocks={STOCKS}/>
    </div>
  )
}

export default Market;
