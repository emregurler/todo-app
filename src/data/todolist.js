const midTitle = 'This is a mid title with greedings';
const longTitle = 'This is a long title with greedings.This is a long title with greedings';
const longerTİtle =
  'This is a long title with greedings.This is a long title with greedingsThis is a long title with greedings.This is a long title with greedings';
const longDesc =
  'Aliquip adipisicing occaecat deserunt velit Lorem dolore ex. Mollit ad cupidatat consequat do occaecat dolore ipsum pariatur pariatur anim qui ipsum. Ad irure elit anim ad nostrud mollit est. Velit quis id magna aliquip consectetur aliquip sit aute proident Lorem sit. Reprehenderit aliquip do enim cupidatat excepteur cillum sit qui culp';

const createTodoList = (count) => {
  const obj = Array.from(Array(count).keys()).map((i) => {
    const obj = {
      id: i,
      title: `Todo ${i} ${
        i % 15 === 0 ? longTitle : i % 10 === 0 ? longerTİtle : i % 5 === 0 ? midTitle : ''
      }`,
      description: longDesc,
      done: false,
      deadline: '2021-07-04 23:59:00',
    };
    return obj;
  });
  return obj;
};

export { createTodoList };
