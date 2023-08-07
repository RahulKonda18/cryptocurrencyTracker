import Loader from 'react-loader-spinner'
import {Component} from 'react'
import CryptocurrenciesList from '../components/CryptocurrenciesList'
import './index.css'

class CryptocurrencyTracker extends Component {
  state = {details: [], isLoading: true}

  componentDidMount() {
    this.getDetails()
  }

  getDetails = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const data = await response.json()
    console.log(data)
    const formattedData = data.map(each => ({
      currencyName: each.currency_name,
      usdValue: each.usd_value,
      euroValue: each.euro_value,
      id: each.id,
      currencyLogo: each.currency_logo,
    }))
    this.setState({isLoading: false, details: formattedData})
  }

  render() {
    const {details, isLoading} = this.state
    return (
      <div>
        {isLoading ? (
          <div className="d" data-testid="loader">
            <Loader type="Circles" color="#ffffff" height={180} width={180} />
          </div>
        ) : (
          <div className="bg">
            <h1 className="heading">Cryptocurrency Tracker</h1>
            <img
              src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png "
              alt="cryptocurrency"
              className="logo2"
            />
            <CryptocurrenciesList details={details} />
          </div>
        )}
      </div>
    )
  }
}

export default CryptocurrencyTracker
