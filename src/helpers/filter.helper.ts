import map from 'lodash/map';
import orderBy from 'lodash/orderBy';
import uniqBy from 'lodash/uniqBy';
import reverse from 'lodash/reverse';
import { IOffer, Value } from '../store/data/slice';

const priorityMap = {
  черный: 1,
  белый: 2,
  коричневый: 3,
} as any;

const getFilterByKey = (offers: IOffer[], key: keyof Pick<IOffer, 'color' | 'size'>, title: string) => {
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

  const mappedFilters =
    key === 'size'
      ? filters.map((filter) => {
          const isSizeDisalbed = offers.filter((offer) => offer.size === filter.value).every(({ quantity }) => quantity <= 5);

          return {
            value: filter.value,
            disabled: isSizeDisalbed,
          };
        })
      : filters;

  const filter = { title, filters: mappedFilters };
  return filter;
};

export { getFilterByKey };
