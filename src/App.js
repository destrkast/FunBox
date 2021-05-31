import './App.css';
import cards from './data/cards';
import Card from './components/Card/Card';
import CardList from './components/CardList/CardList';
import CardList__Item from './components/CardList/__Item/CardList__Item';

function App() {
  return (
    <div className="App">
      <h1 className='page-title'>Ты сегодня покормил кота?</h1>
      <CardList>
        {cards.map((card) => (
          <CardList__Item key={card.id}>
            <Card {...card} />
          </CardList__Item>
        ))}
      </CardList>
    </div>
  );
}

export default App;
