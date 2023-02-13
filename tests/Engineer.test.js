const Engineer = require("../lib/Engineer")

test("Can set github with constructor", () => {
    const engineer = new Engineer("Name", 1, "email@test.com", "Github");
    expect(engineer.github).toBe("Github");
});

test("Can get github with getGithub", () => {
    const engineer = new Engineer("Name", 1, "email@test.com", "Github");
    expect(engineer.getGithub()).toBe("Github");
});

test("getRole() should return Engineer", () => {
    const engineer = new Engineer("Name", 1, "email@test.com", "Github");
    expect(engineer.getRole()).toBe("Engineer");
});

