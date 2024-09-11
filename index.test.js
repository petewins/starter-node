import { sum, divide, generateGreeting } from ".";
 
test("adds 2 + 3 to equal 5", () => {
    expect(sum(2, 3)).toBe(5);
});

test('divides 3 by 4 to equal 0.75', () => {
    expect(divide(3, 4)).toBe(0.75);
});

describe('generateGreeting', () => {
    it('should return a greeting with male gender', () => {
        const result = generateGreeting('John', 'male');
        expect(result).toBe('Hello, John!, based on the name, I think you are a male.');
    });

    it('should return a greeting with female gender', () => {
        const result = generateGreeting('Jane', 'female');
        expect(result).toBe('Hello, Jane!, based on the name, I think you are a female.');
    });

    it('should return a greeting with unknown gender', () => {
        const result = generateGreeting('Alex', null);
        expect(result).toBe("Hello, Alex!, I'm not sure what your gender is.");
    });
});