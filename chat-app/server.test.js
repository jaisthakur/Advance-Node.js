const {dbUrl} = require('./server')
test('URL should be defined', () => {
    expect(dbUrl).toBeDefined()
})