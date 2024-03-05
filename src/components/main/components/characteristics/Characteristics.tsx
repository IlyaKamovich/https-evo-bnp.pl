import { FC } from 'react';
import './Characteristics.styles.scss';

const CONTENT = [
  {
    title: 'Материал:',
    description: 'АБС + метал',
  },
  {
    title: 'Цвет:',
    description: 'Черный',
  },
  {
    title: 'Тип питания:',
    description: 'Литиевая батарея',
  },
  {
    title: 'Мощность:',
    description: '550 Вт',
  },
  {
    title: 'Поддержка:',
    description: 'ОЭМ, ОДМ, ОБМ',
  },
  {
    title: 'Комплектация:',
    description: 'Пила, АКБ 1шт, зарядка, отвертка, ключ, цепь, шина',
  },
];

const Characteristics: FC = () => {
  return (
    <div className="stats">
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
