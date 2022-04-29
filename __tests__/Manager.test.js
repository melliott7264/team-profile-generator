const Manager = require('../lib/Manager');

test('creates a Manager object', () => {
    const manager = new Manager('Mark', 101, 'markelliottva@gmail.com', 10);

    expect(manager.name).toBe("Mark");
    expect(manager.id).toEqual(101);
    expect(manager.email).toBe("markelliottva@gmail.com");
    expect(manager.officeNumber).toEqual(10);
});

test('returns the manager office number', () => {
    const manager = new Manager('Mark');
    manager.officeNumber = 10;

    expect(manager.getOfficeNumber()).toEqual(10);
});

test('returns the employee role: Manager', () => {
    const manager = new Manager('Mark');
    
    expect(manager.getRole()).toBe('Manager');
});