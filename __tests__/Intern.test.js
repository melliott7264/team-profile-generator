const Intern = require('../lib/Intern');

test('creates a intern object', () => {
    const intern = new Intern('Mark');
    intern.school = "University of Richmond";

    expect(intern.school).toEqual("University of Richmond");
});

test('returns the intern school', () => {
    const intern = new Intern('Mark');
    intern.school = "University of Richmond";

    expect(intern.getSchool()).toEqual("University of Richmond");
});

test('returns the employee role: Intern', () => {
    const intern = new Intern('Mark');
    
    expect(engineer.getRole()).toHaveProperty('Intern');
});