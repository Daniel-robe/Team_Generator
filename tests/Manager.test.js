const Manager = require("../lib/Manager")

test("Can set office number with constructor", () => {
    const manager = new Manager("Name", 1, "test@email.com", 10);
    expect(manager.officeNumber).toBe(10);
});

test("Can get office number with constructor", () => {
    const manager = new Manager("Name", 1, "test@email.com", 10);
    expect(manager.getOfficeNumber()).toBe(10);
});

test("getRole() should return Manager", () => {
    const manager = new Manager("Name", 1, "test@email.com", 10);
    expect(manager.getRole()).toBe("Manager");
})
