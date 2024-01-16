# Frontend Mentor - Article preview component solution

This is a solution to the [Article preview component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/article-preview-component-dYBN_pYFT). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)


## Overview

### The challenge

Users should be able to:

- View the optimal layout for the component depending on their device's screen size
- See the social media share links when they click the share icon

### Screenshot

![](/images/127.0.0.1_5500_%20(1).png)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML
- CSS
- Flexbox
- Transition
- Javascript


### What I learned

While working on this project I have implemented javascript and transitions onto the page. After developing the UI of the article component I ran into an issue with adding transitions to the code. Since I have display as none and when changing the display to flex while having a transition it does not work. The reason why is because the transition will trigger first then the display flex will trigger after making it look like transition didn't do anything. I looked up ways on getting transitions to work with display. I found an article about adding setTimeout on the properties in CSS I want to change so that the display gets triggered first then after the other properties.

To see how you can add code snippets, see below:

```html
    <div id="popup" class="popup">
      <div class="mobile-icon">
        <p class="share">SHARE</p>
        <button>
          <a href="https://www.facebook.com/">
            <img src="/images/icon-facebook.svg" alt="icon-facebook">
          </a>
        </button>
        <button>
          <a href="https://twitter.com/">
            <img src="/images/icon-twitter.svg" alt="icon-twitter">
          </a>
        </button>
        <button>
          <a href="https://www.pinterest.ca/">
            <img src="/images/icon-pinterest.svg" alt="icon-pinterest">
          </a>
        </button>
      </div>
      <div id="mobileBtn">
        <button class="shareBtn">
          <img src="/images/icon-share.svg" alt="icon-share">
        </button>
      </div>
    </div>
```
```css
    .id {
        display: flex;
        opacity: 1;
        justify-content: space-between;
        align-items: center;
        margin-top: 10px;
        margin-top: 20px;
        padding-top: 10px;
        transition: all 500ms;
    }

    .popup {
        display: none;
        opacity: 0;
        justify-content: space-around;
        align-items: center;
        margin-top: 10px;
        padding: 20px 0;
        background-color: hsl(217, 19%, 35%);
        width: 0;
        height: 0;
        border-radius: 0 0 10px 10px;
        transition: all 500ms;
    }
```
```js
function showMedia() {
        if(window.matchMedia('(max-width: 375px)').matches) {
            if(document.getElementById('id').style.display === '' || document.getElementById('id').style.display === 'flex') {
                document.getElementById('id').style.display = 'none';
                document.getElementById('id').style.opacity = '0'
                document.getElementById('popup').style.display = 'flex';
                setTimeout(function() {
                    document.getElementById('popup').style.height = '20%';
                    document.getElementById('popup').style.width = '100%';
                    document.getElementById('popup').style.opacity = '1';
                }, 20)
            } else if(document.getElementById('id').style.display === 'none') {
                document.getElementById('popup').style.display = 'none';
                document.getElementById('popup').style.height = '';
                document.getElementById('popup').style.width = '0';
                document.getElementById('popup').style.opacity = '0';
                document.getElementById('id').style.display = 'flex';
                setTimeout(function() {
                    document.getElementById('id').style.opacity = '1';
                }, 20)
            }
        }
    }

```


### Continued development

I Would like to focus on getting better at transitions and animations also javascript.


### Useful resources

- [setTimeout](https://www.w3schools.com/jsref/met_win_settimeout.asp) - This helped me know what to use to delay the trigger of a css property.
- [transition on display CSS](https://www.impressivewebs.com/animate-display-block-none/) - This help me explain what is happening with the display none.

## Author

- Website - [Chenxi](https://my-portfolio-vert-xi-14.vercel.app/)
- Frontend Mentor - [@Chenxi96](https://www.frontendmentor.io/profile/Chenxi96)
- Twitter - [@Chenxi_Lin_](https://www.twitter.com/Chenxi_Lin_)

