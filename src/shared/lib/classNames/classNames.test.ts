import { cn } from './classNames';

describe('classNames', () => {
    test('only string', () => {
        expect(cn('flex flex-1')).toBe('flex flex-1');
    });
    test('only obj', () => {
        expect(cn({ flex: true, 'flex-1': true })).toBe('flex flex-1');
    });
    test('string obj', () => {
        expect(cn('mx-[20rem]', { flex: true, 'flex-1': true })).toBe('mx-[20rem] flex flex-1');
    });
});
