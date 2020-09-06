import * as fromShell from './shell.actions';

describe('loadShells', () => {
  it('should return an action', () => {
    expect(fromShell.loadShells().type).toBe('[Shell] Load Shells');
  });
});
