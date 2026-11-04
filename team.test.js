import Team from './team.js';

describe('Класс Team', () => {
    let team;
    let character1;
    let character2;
    let character3;

    beforeEach(() => {
        team = new Team();
        character1 = { name: 'Воин' };
        character2 = { name: 'Маг' };
        character3 = { name: 'Лучник' };
    });

    test('Метод add должен добавлять персонажа', () => {
        team.add(character1);
        expect(team.members.size).toBe(1);
        expect(team.members.has(character1)).toBe(true);
    });

    test('Метод add должен выбрасывать ошибку при добавлении дубликата', () => {
        team.add(character1);
        expect(() => team.add(character1)).toThrow('Этот персонаж уже в команде!');
    });

    test('Метод addAll должен добавлять нескольких персонажей', () => {
        team.addAll(character1, character2, character3);
        expect(team.members.size).toBe(3);
    });

    test('Метод addAll не должен добавлять дубликаты и не должен выбрасывать ошибку', () => {
        team.addAll(character1, character2, character1, character3, character2);
        expect(team.members.size).toBe(3); 
    });

    test('Метод toArray должен возвращать массив', () => {
        team.addAll(character1, character2);
        const result = team.toArray();
        
        expect(Array.isArray(result)).toBe(true);
        expect(result.length).toBe(2);
        expect(result).toContain(character1);
        expect(result).toContain(character2);
    });
});