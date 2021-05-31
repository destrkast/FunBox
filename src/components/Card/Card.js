import imageCatPng from '../../assets/images/cat_1.png';
import imageCatPng2x from '../../assets/images/cat2x_1.png';
import imageCatWebp from '../../assets/images/cat.webp';
import imageCatWebp2x from '../../assets/images/cat2x.webp';
import imageCatAvif from '../../assets/images/cat.avif';
import imageCatAvif2x from '../../assets/images/cat2x.avif';

import { useState } from 'react';
import './Card.css';

function Card(props) {
  const [isSelected, setIsSelected] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isMouseOut, setIsMouseOut] = useState(false);

  function checkboxChangeHandler() {
    setIsSelected(!isSelected);
    setIsMouseOut(true);
  }

  function labelMouseOverHandler() {
    setIsHovered(true);
    setIsMouseOut(false);
  }

  function labelMouseOutHandler() {
    setIsHovered(false);
  }

  const {
    id,
    isAvailable,
    name,
    taste,
    description,
    features,
    weight,
    footerText,
  } = props;

  return (
    <div className="card">
      <input
        type="checkbox"
        className="card__input"
        id={`input-${id}`}
        disabled={!isAvailable}
        checked={isSelected}
        onChange={checkboxChangeHandler}
      />
      <div
        className={`card-content ${isSelected ? 'card-content_selected' : ''}`}
      >
        <label
          htmlFor={`input-${id}`}
          className="card__label"
          onMouseEnter={labelMouseOverHandler}
          onMouseLeave={labelMouseOutHandler}
        />
        <div className="card__description">
          {isSelected && isHovered && !isMouseOut ? (
            <span className="card__header-text card__header-text_cat">
              Котэ не одобряет?
            </span>
          ) : (
            <span className="card__header-text">{description}</span>
          )}

          <h2 className="card__title">{name}</h2>
          <span className="card__taste">{taste}</span>
          <ul className="card__features">
            {features.map((feature) => (
              <li key={feature.text}>
                {feature.highlightedText && (
                  <span className="card__features-highlighted-text">{`${feature.highlightedText} `}</span>
                )}
                {feature.text}
              </li>
            ))}
          </ul>
        </div>
        <picture>
          <source
            srcSet={`${imageCatWebp} 1x, ${imageCatWebp2x} 2x`}
            type="image/webp"
          />
          <source
            srcSet={`${imageCatAvif} 1x, ${imageCatAvif2x} 2x`}
            type="image/avif"
          />
          <img
            className="card__image"
            src={imageCatPng}
            srcSet={`${imageCatPng2x} 2x`}
            alt="Кот с кулоном в виде логотипа FunBox на шее"
          />
        </picture>

        {/* <img src={imageCat} alt="cat" /> */}
        <div className="card__weight">
          <span className="card__weight-value">{weight.value}</span>
          <span className="card__weight-unit">{weight.unit}</span>
        </div>
      </div>
      <div className="card__footer">
        {isAvailable && !isSelected && (
          <p className="card__footer-text">
           Чего сидишь? Порадуй котэ,{' '}
            <label htmlFor={`input-${id}`} className="card__footer-label">
              купи
            </label>
            <span className="card__footer-dot">.</span>
          </p>
        )}
        {isAvailable && isSelected && (
          <p className="card__footer-text">{footerText.selected}</p>
        )}
        {!isAvailable && (
          <p className="card__footer-text card__footer-text_disabled">
            {footerText.disabled}
          </p>
        )}
      </div>
    </div>
  );
}

export default Card;
