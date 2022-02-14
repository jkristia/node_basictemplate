import { Other } from "./other"

describe('other.test', () => {
    it('just for testing', () => {
        const o = new Other();
        expect(o.add(2,3)).not.toBe(6)
        expect(o.add(2,3)).toBe(5)
    })
})