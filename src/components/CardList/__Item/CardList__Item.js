import './CardList__Item.css';

function CardList__Item(props) {
  return <li className="card-list__item">{props.children}</li>;
}


export default CardList__Item;