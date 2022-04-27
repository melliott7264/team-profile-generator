const Employee = require('../lib/Employee');

test('creates a employee object', () => {
    const employee = new Employee('Mark');
    employee.id = 5;
    employee.email = "markelliottva@gmail.com";

    expect(employee.name).toBe('Mark');
    expect(employee.id).toEqual(5);
    expect(employee.email).toEqual("markelliottva@gmail.com");
});

test(' returns the employee name', () => {
    const employee = new Employee('Mark');

    expect(employee.getName()).toBe('Mark');
});

test(' returns the employee ID', () => {
    const employee = new Employee('Mark');
    employee.id = 5;

    expect(employee.getId()).toEqual(5);
});

test(' returns the employee e-mail address', () => {
    const employee = new Employee('Mark');
    employee.email = "markelliottva@gmail.com";

    expect(employee.getEmail()).toEqual("markelliottva@gmail.com");
});

test('returns the employee role: Employee', () => {
    const employee = new Employee('Mark');
    
    expect(employee.getRole()).toBe('Employee');
});