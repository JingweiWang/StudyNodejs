suite('Globle Test', () => {
    test('page has a valid title', () => {
        assert(document.title && document.title.match(/\S/) && document.title.toLowerCase() !== 'TODO');
    });
});