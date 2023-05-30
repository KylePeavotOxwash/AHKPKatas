import { helloWorld } from "./index";

describe('Test tests', () => {
    it('should return hello world', () => {
        expect(helloWorld()).toBe('Hello world!');
    });
});