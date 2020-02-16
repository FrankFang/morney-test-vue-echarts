import recordStore from '@/store/recordStore';
import tagStore from '@/store/tagStore';

const store = {
  count: 0,
  addCount() {
    this.count += 1;
  },
  ...recordStore,
  ...tagStore,
};

console.log(store);

export default store;
