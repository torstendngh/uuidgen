import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [randomString, setRandomString] = useState("");
  const [prefix, setPrefix] = useState("container__");
  const [suffix, setSuffix] = useState("");

  useEffect(() => {
    setRandomString(generateRandomString());
  }, [prefix, suffix]);

  const generateRandomChar = () => {
    const characters =
      "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    return characters.charAt(Math.floor(Math.random() * characters.length));
  };

  const generateRandomString = () => {
    let pattern = prefix;
    for (let i = 0; i < 19; i++) {
      if (i === 4 || i === 9 || i === 14) {
        pattern += "_";
      } else {
        pattern += generateRandomChar();
      }
    }
    return pattern + suffix;
  };

  const copyToClipboard = () => {
    if (randomString) {
      navigator.clipboard
        .writeText(randomString)
        .then(() => {
          setRandomString(generateRandomString());
        })
        .catch((err) => console.error("Error copying text: ", err));
    }
  };

  const handlePrefixChange = (event) => {
    setPrefix(event.target.value);
  };

  const handleSuffixChange = (event) => {
    setSuffix(event.target.value);
  };

  return (
    <>
      <h1>
        <svg
          width="32"
          height="32"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_32_5)">
            <rect width="16" height="16" rx="4" fill="#4FE0B5" />
            <path
              d="M5.01667 3.3476C5.20751 3.3024 5.34312 3.10151 5.29792 2.91568L5.0016 1.53455C4.9564 1.33867 4.76555 1.21814 4.56968 1.25832C4.37381 1.29347 4.24323 1.48935 4.28341 1.68522L4.58475 3.06133C4.62493 3.2572 4.81578 3.3928 5.01667 3.3476ZM3.06298 3.88499C3.20863 4.02562 3.43966 4.02562 3.57526 3.88499C3.71086 3.73935 3.71589 3.51334 3.57526 3.37271L2.5708 2.36825C2.42515 2.2226 2.20417 2.22763 2.06354 2.36825C1.9179 2.5139 1.91287 2.73488 2.06354 2.88053L3.06298 3.88499ZM6.99547 12.5686C8.59256 14.1657 10.6115 14.0402 12.058 12.5987C13.1428 11.5139 13.4039 10.3738 13.0072 9.00272C12.7962 8.10878 12.279 7.11432 11.827 6.26055C11.5959 5.81861 11.3147 5.24604 11.1389 5.04515C10.943 4.81915 10.6467 4.80408 10.4207 4.99995C10.1595 5.22595 10.1495 5.52729 10.3152 5.99941L10.8878 7.56135C10.943 7.71198 10.933 7.80238 10.8777 7.85764C10.8124 7.92295 10.7271 7.93301 10.6115 7.81244L6.85987 4.06078C6.62885 3.82975 6.26725 3.82975 6.03622 4.06078C5.81022 4.28678 5.81022 4.65341 6.03622 4.87941L8.76833 7.61158C8.64782 7.67181 8.51725 7.74215 8.39165 7.82752L5.23765 4.6735C5.00662 4.44247 4.64502 4.44247 4.41901 4.6735C4.18798 4.8995 4.18798 5.26111 4.41901 5.49214L7.53285 8.61101C7.43742 8.72147 7.34702 8.84204 7.26165 8.96255L4.40394 6.09981C4.17292 5.87381 3.81131 5.86878 3.58029 6.09981C3.35428 6.32587 3.35428 6.6925 3.58531 6.9185L6.68907 10.0223C6.62885 10.183 6.58867 10.3387 6.55347 10.4894L4.3939 8.32472C4.16287 8.09872 3.80127 8.09872 3.57526 8.32472C3.34423 8.55575 3.34423 8.91735 3.57526 9.14838L6.99547 12.5686ZM9.66736 4.93968L8.78845 4.06078C8.55742 3.82975 8.19079 3.83477 7.96479 4.06078C7.95473 4.07082 7.94467 4.08086 7.93462 4.09593L9.61713 5.77838C9.58696 5.47707 9.60205 5.19582 9.66736 4.93968ZM2.54569 5.60263C2.73653 5.6428 2.93241 5.51724 2.96756 5.32138C3.00774 5.12551 2.88721 4.93968 2.69133 4.8995L1.30517 4.59816C1.09423 4.55296 0.898366 4.68856 0.868229 4.8995C0.838097 5.09035 0.963657 5.27115 1.1545 5.31133L2.54569 5.60263ZM13.9815 12.5987C15.0663 11.5139 15.3325 10.3738 14.9358 9.00272C14.7198 8.10878 14.2075 7.11432 13.7505 6.26055C13.5245 5.81358 13.2432 5.24102 13.0624 5.04515C12.8666 4.81915 12.5752 4.80408 12.3442 4.99995C12.2488 5.08031 12.1886 5.17573 12.1534 5.2812C12.284 5.52227 12.4095 5.77341 12.5401 6.01444C12.9771 6.84312 13.5094 7.89278 13.7203 8.84707C14.1774 10.4994 13.8107 11.8906 12.5752 13.116C12.3593 13.337 12.1232 13.5279 11.8872 13.6886C12.6406 13.5931 13.3688 13.2164 13.9815 12.5987Z"
              fill="#212226"
            />
          </g>
          <defs>
            <clipPath id="clip0_32_5">
              <rect width="16" height="16" fill="white" />
            </clipPath>
          </defs>
        </svg>
        CSS UUID Generator
      </h1>
      <div className="container__1EgQ_S2H8_ERwS_E6yS">
        <button
          onClick={() => {
            setPrefix("container__");
            setSuffix("");
          }}
        >
          c__
        </button>
        <button
          onClick={() => {
            setPrefix("className=\"");
            setSuffix("\"");
          }}
        >
          cn:" "
        </button>
        <button
          onClick={() => {
            setPrefix("className=\{\`");
            setSuffix("\`\}");
          }}
        >
          cn:&#123;` `&#125;
        </button>
        <button
          onClick={() => {
            setPrefix("<div className=\"");
            setSuffix("\"></div>");
          }}
        >
          div ""
        </button>
        <button
          onClick={() => {
            setPrefix("<div className=\{\`");
            setSuffix("\`\}></div>");
          }}
        >
          div ``
        </button>
      </div>
      <div className="container__1EgQ_S2H8_ERwS_E6yS">
        <span>Prefix:</span>
        <input
          type="text"
          value={prefix}
          onChange={handlePrefixChange}
          placeholder="Enter Prefix"
        />
      </div>
      <div className="container__1EgQ_S2H8_ERwS_E6yS">
        <span>Suffix:</span>
        <input
          type="text"
          value={suffix}
          onChange={handleSuffixChange}
          placeholder="Enter Suffix"
        />
      </div>
      {randomString && <p>{randomString}</p>}
      {randomString && (
        <button onClick={copyToClipboard} className="primary">
          <svg
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.8418 21.9424C4.8418 23.8496 5.82617 24.834 7.70703 24.834H15.9336C17.8145 24.834 18.7988 23.8408 18.7988 21.9424V20.3164H20.293C22.1738 20.3164 23.1582 19.3232 23.1582 17.4248V5.35742C23.1582 3.4502 22.1738 2.45703 20.293 2.45703H12.0664C10.1855 2.45703 9.20117 3.4502 9.20117 5.35742V6.97461H7.70703C5.82617 6.97461 4.8418 7.97656 4.8418 9.875V21.9424ZM14.1055 5.6123C13.7188 5.6123 13.5078 5.34863 13.5078 5.05859V4.85645C13.5078 4.59277 13.7012 4.29395 14.1055 4.29395H18.2451C18.6582 4.29395 18.8428 4.59277 18.8428 4.85645V5.05859C18.8428 5.34863 18.6406 5.6123 18.2451 5.6123H14.1055ZM6.59082 21.8281V9.98926C6.59082 9.18066 7.0127 8.73242 7.86523 8.73242H10.5459V13.5137C10.5459 14.7881 11.1699 15.4033 12.4355 15.4033H17.0498V21.8281C17.0498 22.6367 16.6279 23.085 15.7754 23.085H7.85645C7.0127 23.085 6.59082 22.6367 6.59082 21.8281ZM12.6025 13.8652C12.2422 13.8652 12.084 13.7158 12.084 13.3467V9.06641L16.8125 13.8652H12.6025Z"
              fill="currentColor"
            />
          </svg>
          Copy to Clipboard
        </button>
      )}
    </>
  );
}

export default App;
