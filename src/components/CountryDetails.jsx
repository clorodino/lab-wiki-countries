import { useParams } from 'react-router-dom';
import {useState} from 'react';
import { Link } from 'react-router-dom';

const CountryDetails = ({ countries }) => {
  const [isLoading, setIsLoading] = useState(false);

  const {id: countryId} = useParams()
  const country = countries.find((country) => country.alpha3Code === countryId);

  // Return statment based on the last iteration. For the previous iteration you need a map or depends how you have structured the code ;)
  return (
    <div>
      {isLoading && <p>Data is loading...</p>}
      {!isLoading && (
        <div className="col-7">
          <img
            src={`https://flagpedia.net/data/flags/w580/${country.alpha2Code.toLowerCase()}.png`}
            alt=""
            width="300px"
            height="auto"
          />
          <h1>{country.name.common}</h1>
          <table className="table">
            <tbody>
              <tr>
                <td style={{ width: '30%' }}>Capital</td>
                <td>{country.capital}</td>
              </tr>
              <tr>
                <td>Area</td>
                <td>
                  {country.area} km <sup>2</sup>
                </td>
              </tr>
              <tr>
                <td>Borders</td>
                <td>
                  {country.borders.length === 0 ? (
                    <p>This country has no neighbouring countries.</p>
                  ) : (
                    <ul>
                      {country.borders.map((countryCode, index) => {
                        return (
                          <li key={index}>
                            <Link to={countryCode}>{countryCode}</Link>;
                          </li>
                        );
                      })}
                    </ul>
                  )}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default CountryDetails;
