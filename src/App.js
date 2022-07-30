import "./styles.css";
import { useState } from "react";

export default function App() {
  const [val, setVal] = useState(true);

  const toggle = () => {
    setVal(!val);
  };

  return (
    <>
      <section>
        <div className="container">
          <h3>our pricing</h3>

          <div className="toggle-btn-container">
            <label className="switch">
              <input type="checkbox" onClick={toggle} />
              <span className="switch-slider"> </span>
            </label>
          </div>

          <div className="card-container">
            <div className="card">
              <h5>Basic</h5>
              {val ? (
                <>
                  <h2>
                    <span>$</span>10.99
                  </h2>
                  <h3>monthly </h3>
                </>
              ) : (
                <>
                  <h2>
                    <span>$</span>125.99
                  </h2>
                  <h3>annually </h3>
                </>
              )}
              <ul>
                <li>500 GB Storage</li>
                <li>2 Users Allowed</li>
                <li>Sends Upto 2 GB</li>
              </ul>
              <button>Learn More</button>
            </div>
            <div className="card">
              <h5>Proffessional</h5>

              {val ? (
                <>
                  <h2>
                    <span>$</span>25.99
                  </h2>
                  <h3>monthly</h3>
                </>
              ) : (
                <>
                  <h2>
                    <span>$</span>275.99
                  </h2>
                  <h3>annually</h3>
                </>
              )}
              <ul>
                <li>1 TB Storage</li>
                <li>5 Users Allowed</li>
                <li>Sends Upto 10 GB</li>
              </ul>
              <button>Learn More</button>
            </div>

            <div className="card">
              <h5>Master</h5>

              {val ? (
                <>
                  <h2>
                    <span>$</span>30.99
                  </h2>
                  <h3>monthly</h3>
                </>
              ) : (
                <>
                  <h2>
                    <span>$</span>330.99
                  </h2>
                  <h3>annually</h3>
                </>
              )}

              <ul>
                <li>2 TB Storage</li>
                <li>10 Users Allowed</li>
                <li>Sends Upto 20 GB</li>
              </ul>
              <button>Learn More</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}