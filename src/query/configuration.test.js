const {resolvers} = require ("../resolvers")
describe("retrieving positions from database", () => {
    const args = {
        id: "test",
    }
    it("Get something and check response is expected result" , async () => {
        const result = await resolvers.Query.getConfiguration(null,args)
        result.forEach(result => {
            expect(result.id).toBeTruthy()
            expect(result.id).toBeDefined()
            expect(result.newOrder).toBeDefined()
            expect(result.colSpan).toBeDefined()
            expect(result.rowSpan).toBeDefined()
        });
        expect(result).toBeTruthy()
    })
})
