const {resolvers} = require ("./resolvers")
test("adding positions to database",async () => {
    const args = {
        id: "test",
        newOrder: 1,
        col: 2,
        colSpan: 3,
        rowSpan: 4
    }
    const result = await resolvers.Mutation.addConfiguration(null,args)

    expect(result).toEqual(args)

    const dataToCheck = await resolvers.Query.getConfiguration(null,args)
    const check = dataToCheck.filter(dataToCheck => {
        return dataToCheck.id === args.id
    })
    expect(check).toBeTruthy()
    await resolvers.Mutation.deleteConfiguration(null,args)

})

test("retrieving positions from database", async () => {
    const args = {
        id: "test",
    }

    const result = await resolvers.Query.getConfiguration(null,args)
    expect(result).toBeTruthy()

    result.forEach(result => {
        expect(result.id).toBeTruthy()
        expect(result.id).toBeDefined()
        expect(result.newOrder).toBeDefined()
        expect(result.colSpan).toBeDefined()
        expect(result.rowSpan).toBeDefined()
    });
})

test("updating positions to database", async () => {
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
    await resolvers.Mutation.addConfiguration(null,args)
    const result = await resolvers.Mutation.updateConfiguration(null,args)

    expect(result.Attributes).toEqual(matchResult)

    await resolvers.Mutation.deleteConfiguration(null,args)
})

test("deleting positions from database", async() => {
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
    await resolvers.Mutation.addConfiguration(null,argsToAdd)
    
    const result = await resolvers.Mutation.deleteConfiguration(null,argsToDelete)
    expect(result).toEqual(argsToDelete)

    const dataToCheck = await resolvers.Query.getConfiguration(null,argsToDelete)
    expect(dataToCheck.id).not.toEqual(argsToDelete.id)
})