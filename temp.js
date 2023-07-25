function clicktweet(){document.querySelector('div[data-testid="tweetTextarea_0RichTextInputContainer"]').click();}
function clickcircle1(){document.querySelector('div[aria-label="Choose audience"]').click();}
function clickcircle2(){Array.from(document.querySelectorAll('span')).find(el => el.textContent === 'Twitter Circle').click();}
function clicktweet2(){document.querySelector('div[data-testid="tweetButtonInline"]').click();}
function waitForElementToExist(selector) {
  return new Promise(resolve => {
    if (document.querySelector(selector)) {
      return resolve(document.querySelector(selector));
    }

    const observer = new MutationObserver(() => {
      if (document.querySelector(selector)) {
        resolve(document.querySelector(selector));
        observer.disconnect();
      }
    });

    observer.observe(document.body, {
      subtree: true,
      childList: true,
    });
  });
}