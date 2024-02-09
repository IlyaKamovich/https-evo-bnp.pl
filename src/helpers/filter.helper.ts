import map from 'lodash/map';
import orderBy from 'lodash/orderBy';
import uniqBy from 'lodash/uniqBy';
import reverse from 'lodash/reverse';
import { IOffer, Value } from '../store/data/slice';

const priorityMap = { черный: 1, серый: 2, 'черный с разноцветной подошвой': 3, 'серый с разноцветной подошвой': 4 } as any;

const getFilterByKey = (offers: IOffer[], key: keyof IOffer, title: string) => {
  const uniqueOffersByKey =
    key !== 'color'
      ? uniqBy(offers, (offer) => offer[key])
      : uniqBy(offers, (offer) => offer[key]).sort(
          (a, b) => priorityMap[b.color.toLocaleLowerCase()] - priorityMap[a.color.toLocaleLowerCase()]
        );

  const filterItems = map(uniqueOffersByKey, (uniqueOfferByKey) => {
    return {
      value: uniqueOfferByKey[key] as Value,
      disabled: false,
    };
  });
  const reversedItems = reverse(filterItems);
  const filters = key === 'size' ? orderBy(reversedItems, ['value'], 'asc') : reversedItems;

  const filter = { title, filters };
  return filter;
};

export { getFilterByKey };
