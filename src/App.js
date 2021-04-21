import './App.css';
import PaypalLogo from "./img/paypal-logo.svg";
import VisaLogo from "./img/visa-logo.svg";

function App() {
  return (
    <div className="App">
      <div className="payment-form">
        <div className="top-bar">
          <h2>3. Payment Method</h2>
        </div>
        <form className="form-container">
          <div className="paymen-method">
            <div className="checkbox-text-container">
              <input type="radio" id="paypal" name="payment-method" value="paypal"></input>
              <div className="text-container">
                <p className="title">Paypal</p>
                <p className="detail">On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble.</p>
              </div>
            </div>
            <img src={PaypalLogo} alt="Logo de Paypal"/>
          </div>
          <div className="paymen-method">
            <div className="checkbox-text-container">
              <input type="radio" id="paypal" name="payment-method" value="visa"></input>
              <div className="text-container">
                <p className="title">Credit Card</p>
                <p className="detail">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
              </div>
            </div>
            <img src={VisaLogo} alt="Logo de Visa" className="logo-visa"/>
          </div>
          <div className="payment-form-container">
            <input type="text" id="number" name="number" placeholder="CARDHOLDER NUMBER" className="input number-card" />
            <select name="month" id="month" className="month-card" >
              <option hidden>MM</option>
              <option>01</option>
              <option>02</option>
              <option>03</option>
              <option>04</option>
              <option>05</option>
              <option>06</option>
              <option>07</option>
              <option>08</option>
              <option>09</option>
              <option>10</option>
              <option>11</option>
              <option>12</option>
            </select>
            <select name="year" id="year" className="year-card" >
              <option hidden>YY</option>
              <option>21</option>
              <option>22</option>
              <option>23</option>
              <option>24</option>
              <option>25</option>
            </select>
            <input type="text" id="cvv" name="cvv" placeholder="CVV/CVC" className="input cvv-card" />
            <input type="text" id="name" name="name" placeholder="CARDHOLDER NAME" className="input name-card" />
          </div>
          <div className="button-container">
            <button type="button" className="secondary-button">Back</button>
            <button type="button" className="primary-button">Continue</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
