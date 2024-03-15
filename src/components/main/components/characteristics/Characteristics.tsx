import { FC } from 'react';
import './Characteristics.styles.scss';

const CONTENT = [
  {
    title: 'Maks. Prędkość:',
    description: 'do 60 km/h',
  },
  {
    title: 'Moc silnika elektrycznego (bezszczotkowy):',
    description: '550 W',
  },
  {
    title: 'Akumulator:',
    description: 'napięcie 48 V, pojemność 20 Ah',
  },
  {
    title: 'Zasięg:',
    description: 'do 60 km',
  },
  {
    title: 'Dopuszczalne obciążenie:',
    description: '150 kg',
  },
  {
    title: 'Liczba miejsc:',
    description: '2',
  },
];

const Characteristics: FC = () => {
  return (
    <div className="stats">
      <h2 className="stats-title">CHARAKTERYSTYKA</h2>
      <ul className="stats-list">
        {CONTENT.map(({ title, description }) => {
          const currentDescription = !Array.isArray(description) ? description : description.map((text) => <p key={text}>{text}</p>);

          return (
            <li key={title} className="stats-list__info">
              <span className="stats-list__info__stat">{title}</span>
              <div className="stats-list__info__text">{currentDescription}</div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export { Characteristics };
