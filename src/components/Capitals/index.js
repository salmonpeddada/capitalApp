import {Component} from 'react'
import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

// Write your code here
class Capitals extends Component {
  state = {
    country: countryAndCapitalsList[0].country,
    value: countryAndCapitalsList[0].id,
  }

  onChangeValue = event => {
    const update = countryAndCapitalsList.filter(
      each => each.capitalDisplayText === event.target.value,
    )
    this.setState({country: update[0].country, value: update[0].id})
  }

  render() {
    const {country, value} = this.state
    console.log(value)
    return (
      <div className="bg-container">
        <div className="card">
          <h1>Countries And Capitals</h1>
          <div className="drop-container">
            <select onChange={this.onChangeValue} value={value}>
              {countryAndCapitalsList.map(each => (
                <option key={each.id} value={each.capitalDisplayText}>
                  {each.capitalDisplayText}
                </option>
              ))}
            </select>
            <p>is capital of which country?</p>
          </div>
          <h1>{country}</h1>
        </div>
      </div>
    )
  }
}

export default Capitals
