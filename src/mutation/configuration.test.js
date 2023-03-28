const {resolvers} = require ("../resolvers")
describe("adding positions to database", () => {
    const args = {
        id: "test",
        newOrder: 1,
        col: 2,
        colSpan: 3,
        rowSpan: 4
    }
    
    it("Get something and check response is expected result" , async () => {
        const result = await resolvers.Mutation.addConfiguration(null,args)
        expect(result).toEqual(args)
    })

    it("Check that data has been inserted", async () => {
        const dataToCheck = await resolvers.Query.getConfiguration(null,args)
        const check = dataToCheck.filter(dataToCheck => {
            return dataToCheck.id === args.id
        })
        expect(check).toBeTruthy()
        await resolvers.Mutation.deleteConfiguration(null,args)
    })

})
describe("updating positions to database", () => {
    const args = {
        id: "test",
        newOrder: 1,
        col: 2,
        colSpan: 3,
        rowSpan: 4
    }

    const matchResult = {
        newOrder: 1,
        col: 2,
        colSpan: 3,
        rowSpan: 4
    }

    it("Get something and check response is expected result" , async () => {
        await resolvers.Mutation.addConfiguration(null,args)
        const result = await resolvers.Mutation.updateConfiguration(null,args)
        expect(result.Attributes).toEqual(matchResult)
        await resolvers.Mutation.deleteConfiguration(null,args)
    })
})

describe("deleting positions from database", () => {
    const argsToAdd = {
        id: "test",
        newOrder: 1,
        col: 2,
        colSpan: 3,
        rowSpan: 4
    }
    const argsToDelete = {
        id: "test",
    }
    
    it("Get something and check response is expected result" , async () => {
        await resolvers.Mutation.addConfiguration(null,argsToAdd)
        const result = await resolvers.Mutation.deleteConfiguration(null,argsToDelete)
        expect(result).toEqual(argsToDelete)
    })

    it("Check that item has been deleted" , async () => {
        const dataToCheck = await resolvers.Query.getConfiguration(null,argsToDelete)
        expect(dataToCheck.id).not.toEqual(argsToDelete.id)
    })
})