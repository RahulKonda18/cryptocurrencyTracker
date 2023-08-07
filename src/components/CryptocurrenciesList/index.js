import CryptocurrencyItem from '../CryptocurrencyItem/index'
import './index.css'

const CryptocurrenciesList = props => {
  const {details} = props
  console.log(details)
  return (
    <ul>
      <li className="list-item2">
        <div className="currency">
          <h1 className="currency-name">Coin Type</h1>
        </div>
        <div className="values">
          <p className="value">USD</p>
          <p className="value">EURO</p>
        </div>
      </li>
      {details.map(each => (
        <CryptocurrencyItem key={each.id} det={each} />
      ))}
    </ul>
  )
}

export default CryptocurrenciesList
