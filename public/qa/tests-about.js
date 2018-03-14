suite('"About" Page Test', () => {
    test('page should contain link to contact page', () => {
        assert($('a[href="/contact"]').length);
    });
});