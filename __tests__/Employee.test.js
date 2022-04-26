const Employee = require('../lib/Employee');

test('creates a employee object', () => {
    const employee = new Employee('Mark');

    expect(employee.name).toBe('Mark');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

test(' returns the employee name', () => {
    const employee = new Employee('Mark');

    expect(employee.getName()).toBe('Mark');
});

test(' returns the employee ID', () => {
    const employee = new Employee('Mark');

    expect(employee.getId()).toEqual(expect.any(Number));
});

test(' returns the employee e-mail address', () => {
    const employee = new Employee('Mark');

    expect(employee.getEmail()).toEqual(expect.any(String));
});

test('returns the emplyee role: Employee', () => {
    const employee = new Employee('Mark');
    
    expect(employee.getRole()).toHaveProperty('Employee');
});