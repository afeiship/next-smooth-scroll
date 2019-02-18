# next-smooth-scroll
> Smooth scroll based on next

## usage:
```js
import NxSmoothScroll from 'next-smooth-scroll';

// window:
const scroller = new NxSmoothScroll();
scroller.run(0, 0.4);

// other scoller:
const scroller2 = new NxSmoothScroller({
  get(){
    return this.scroller.scrollTop;
  },
  set(inValue){
    this.scroller.set('scrollTop', inValue);
  }
}):
scroller.run(100, 0.4);
```
