import './index.css'

const CryptocurrencyItem = props => {
  const {det} = props
  const {currencyName, usdValue, euroValue, currencyLogo} = det
  console.log(currencyName, usdValue, euroValue)

  return (
    <li className="list-item">
      <div className="currency">
        <img className="logo" src={currencyLogo} alt={currencyName} />
        <p className="currency-name">{currencyName}</p>
      </div>
      <div className="values">
        <p className="value">{usdValue}</p>
        <p className="value">{euroValue}</p>
      </div>
    </li>
  )
}

export default CryptocurrencyItem
