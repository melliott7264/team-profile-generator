const Engineer = require('../lib/Engineer');

test('creates a engineer object', () => {
    const engineer = new Engineer('Mark', 101, 'markelliottva@gmail.com', "melliott7264");

    expect(engineer.name).toBe("Mark");
    expect(engineer.id).toEqual(101);
    expect(engineer.email).toBe("markelliottva@gmail.com");
    expect(engineer.gitHub).toEqual("melliott7264");
});

test('returns the engineer GitHub username', () => {
    const engineer = new Engineer('Mark');
    engineer.gitHub = "melliott7264";

    expect(engineer.getGitHub()).toEqual("melliott7264");
    
});

test('returns the employee role: Engineer', () => {
    const engineer = new Engineer('Mark');
    
    expect(engineer.getRole()).toBe('Engineer');
});