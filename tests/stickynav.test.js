const Stickynav = require('stickynav');

describe('Stickynav', () => {
  let stickynav;

  beforeEach(() => {
    document.body.innerHTML = '<div class="this-is-sticky"></div>';
    stickynav = new Stickynav({ 
      elementClass: 'this-is-sticky', 
      scrollThreshold: 100
    });
  });
  
  it('not displays sticky nav when scroll position is under the threshold', () => {
    window.pageYOffset = 0;

    stickynav.onScroll();
  
    expect(
      document.querySelector('.this-is-sticky')
    ).not.toHaveClass('sticky-nav');
  });

  it('displays sticky nav when scroll position reaches the threshold', () => {
    window.pageYOffset = 100;
  
    stickynav.onScroll();
  
    expect(
      document.querySelector('.this-is-sticky')
    ).toHaveClass('sticky-nav');
  });
});
