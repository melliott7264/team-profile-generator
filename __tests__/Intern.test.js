const Intern = require('../lib/Intern');

test('creates a intern object', () => {
    const intern = new Intern('Mark');

    expect(intern.school).toEqual(expect.any(String));
});

test('returns the intern school', () => {
    const intern = new Intern('Mark');

    expect(intern.getSchool()).toEqual(expect.any(String));
});

test('returns the employee role: Intern', () => {
    const intern = new Intern('Mark');
    
    expect(engineer.getRole()).toHaveProperty('Intern');
});