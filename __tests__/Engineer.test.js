const Engineer = require('../lib/Engineer');

test('creates a engineer object', () => {
    const engineer = new Engineer('Mark');

    expect(engineer.gitHub).toEqual(expect.any(String));
});

test('returns the engineer GitHub username', () => {
    const engineer = new Engineer('Mark');

    expect(engineer.getGitHub()).toEqual(expect.any(String));
});

test('returns the employee role: Engineer', () => {
    const engineer = new Engineer('Mark');
    
    expect(engineer.getRole()).toHaveProperty('Engineer');
});