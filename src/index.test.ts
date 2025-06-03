import { add } from './index';

describe('add', () => {
    it('adds two positive numbers', () => {
        const result = add(2, 3);
        expect(result).toBe(5);
    });
    it('adds a positive and a negative number', () => {
        const result = add(5, -2);
        expect(result).toBe(3);
    });
    it('adds two negative numbers', () => {
        const result = add(-4, -6);
        expect(result).toBe(-10);
    });
    it('adds zero', () => {
        const result1 = add(0, 0);
        const result2 = add(7, 0);
        const result3 = add(0, 8);
        expect(result1).toBe(0);
        expect(result2).toBe(7);
        expect(result3).toBe(8);
    });
    it('adds large numbers', () => {
        const expected = 3000000;
        const result = add(1000000, 2000000);
        expect(result).toBe(expected);
    });
});