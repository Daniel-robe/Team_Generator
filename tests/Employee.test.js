const Employee = require("../lib/Employee");

test("Can set name with constructor", () => {
    const employee = new Employee("Name", 1, "test@email.com");
    expect(employee.name).toBe("Name");
});

test("Can set id with constructor", () => {
    const employee = new Employee("Name", 1, "test@email.com");
    expect(employee.id).toBe(1);
});

test("Can set email with constructor", () => {
    const employee = new Employee("Name", 1, "test@email.com");
    expect(employee.email).toBe("test@email.com");
});

test("Can get name with getName()", () => {
    const employee = new Employee("Name", 1, "test@email.com");
    expect(employee.getName()).toBe("Name");
});

test("Can get email with getEmail()", () => {
    const employee = new Employee("Name", 1, "test@email.com");
    expect(employee.getEmail()).toBe("test@email.com");
});

test("Can get id with getId()", () => {
    const employee = new Employee("Name", 1, "test@email.com");
    expect(employee.getId()).toBe(1);
});

test("Can get role with getRole()", () => {
    const employee = new Employee("Name", 1, "test@email.com");
    expect(employee.getRole()).toBe("Employee");
})