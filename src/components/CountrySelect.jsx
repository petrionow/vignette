import React, { useState } from "react";
import {countries} from '../state-data/countries.js';

const CountrySelect = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCountry, setSelectedCountry] = useState(countries[0]); // По умолчанию первая страна

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleSelect = (country) => {
    setSelectedCountry(country);
    setIsOpen(false);
  };

  const filteredCountries = countries.filter((country) =>
    country.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={{ position: "relative", fontSize: "16px" }}>
      {/* Отображение выбранной страны */}
      <div
        className="select-display"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          border: "1px solid #ddd",
          padding: "8px 12px",
          borderRadius: "8px",
          background: "white",
          cursor: "pointer",
        }}
        onClick={toggleDropdown}
      >
        <span style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <img
            src={selectedCountry.flag}
            alt={selectedCountry.name}
            style={{width: "20px", height: "15px", marginRight: "8px"}}
          />
          <div>
            {selectedCountry.name}
          </div>

        </span>
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
          <path d="M2.5 4L6 7.5L9.5 4" stroke="#2C2C2C" strokeWidth="1.5"/>
        </svg>
      </div>

      {/* Выпадающий список */}
      {isOpen && (
        <div
          className="dropdown"
          style={{
            position: "absolute",
            top: "100%",
            left: 0,
            right: 0,
            marginTop: "8px",
            background: "white",
            border: "1px solid #ddd",
            borderRadius: "8px",
            maxHeight: "200px",
            overflowY: "auto",
            zIndex: 1000,
          }}
        >
          {/* Поле поиска */}
          <div
            style={{
              padding: "8px",
              borderBottom: "1px solid #ddd",
              position: "sticky",
              top: 0,
              background: "white",
            }}
          >
            <input
              type="text"
              placeholder="Поиск..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{
                width: "100%",
                padding: "8px",
                border: "1px solid #ddd",
                borderRadius: "4px",
              }}
            />
          </div>

          {/* Список стран */}
          {filteredCountries.map((country) => (
            <div
              key={country.code}
              className="dropdown-item"
              style={{
                padding: "8px 12px",
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
              }}
              onClick={() => handleSelect(country)}
            >
              <img
                src={country.flag}
                alt={country.name}
                style={{ width: "20px", height: "15px", marginRight: "8px" }}
              />
              {country.name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CountrySelect;
