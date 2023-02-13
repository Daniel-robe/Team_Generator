const Intern = require("../lib/Intern")

test("Can set school with constructor", () => {
    const intern = new Intern("Name", 1, "test@email.com", "School");
    expect(intern.school).toBe("School");
});

test("Can get school with getSchool()", () => {
    const intern = new Intern("Name", 1, "test@email.com", "School");
    expect(intern.getSchool()).toBe("School");
});

test("getRole() should return Intern", () => {
    const intern = new Intern("Name", 1, "test@email.com", "School");
    expect(intern.getRole()).toBe("Intern");
});