# next-smooth-scroll
> Smooth scroll based on next

## usage:
```js
import NxSmoothScroll from 'next-smooth-scroll';

//to top:
NxSmoothScroll.easout(0, 4);
```


## native smooth scroll(use css)
```js
// JS
window.scroll({
  top: 2500, 
  left: 0, 
  behavior: 'smooth' 
});


// Scroll to a certain element
document.querySelector('.hello').scrollIntoView({ 
  behavior: 'smooth' 
});
```
