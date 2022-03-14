import {isMatchPath} from './routing';

describe('isMatchPath', () => {
  global.window = Object.create(window);
  Object.defineProperty(window, 'location', {
    value: {
      pathname: null,
      hash: null,
    },
    writable: true,
  });

  describe('is match with hash route', () => {
    window.location.pathname = '/';
    window.location.hash = '#/testRoute';

    it('is exact match', () => {
      expect(isMatchPath('/testRoute', true));
    });
    it('is no exact match', () => {
      expect(isMatchPath('/', false));
    });
    it('is no  match', () => {
      expect(!isMatchPath('/', true));
    });
  });

  describe('is match with route', () => {
    window.location.pathname = '/testRoute';
    window.location.hash = '';

    it('is exact match', () => {
      expect(isMatchPath('/testRoute', true));
    });

    it('is no exact match', () => {
      expect(isMatchPath('/', false));
    });

    it('is no  match', () => {
      expect(!isMatchPath('/', true));
    });
  });
});
