import React from 'react';
import { render } from '@testing-library/react';
import Form from '../TodoForm/Form';
import { todosLenght_1 } from '../../../helper/testsHelper';

describe('Form component tests starting...', () => {
  it('form should displayed empty if it is add mode', () => {
    const formComponent = () => render(<Form />);
    expect(formComponent).toMatchSnapshot();
  });

  it('form should displayed empty if it is add mode', () => {
    const todo = { ...todosLenght_1[0] };
    const formComponent = () => render(<Form todo={todo} />);
    expect(formComponent).toMatchSnapshot();
  });
});

// it('template should have class if has prop', () => {
//     const templateComponent = () => render(<Template className="newClass" />);
//     const { getByTestId } = templateComponent();
//     const template = getByTestId('template');
//     expect(template.classList.contains('newClass')).toBe(true);
//   });

//   it('template should only have container class if className not given', () => {
//     const templateComponent = () => render(<Template />);
//     const { getByTestId } = templateComponent();
//     const template = getByTestId('template');
//     expect(Array.from(template.classList).every((cl) => cl === 'container')).toBe(true);
//   });

//   it('template header should have title if given', () => {
//     const templateHeaderComponent = () => render(<TemplateHeader title="Todo App" />);
//     const { getByTestId } = templateHeaderComponent();
//     const templateHeader = getByTestId('template-title');
//     expect(templateHeader).toHaveTextContent('Todo App');
//   });
