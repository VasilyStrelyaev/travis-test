fixture `My fixture`
    .page `https://devexpress.github.io/testcafe/`;

test('My test', async t => {
    await t.expect(true).ok();
})