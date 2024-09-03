import { describe, expect, expectTypeOf, it } from 'vitest'
import foo from 'issue-vite-conditional-exports/foo'

describe('foo', () => {
  it('should be true', () => {
    const f = foo()
    expect(f).toBe('foo.browser')
    expectTypeOf(f).toEqualTypeOf<'foo.browser'>()
    expectTypeOf(f).not.toEqualTypeOf<'foo.node'>()
  })
})
