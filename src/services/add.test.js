import add from './add.js';

test('add 1 + 2 equils 3', () => {
    
    expect(add(1, 2)).toMatchSnapshot();
})