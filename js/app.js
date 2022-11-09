const inputRange = document.querySelector('#inputRange');
const price = document.querySelector('#price');
const pageviews = document.querySelector('#pageviews');
const arrayPageViews = ['10k', '50k', '100k', '500k', '1M']

inputRange.addEventListener('input', () => {
    price.textContent = inputRange.value;
    pageviews.textContent = arrayPageViews[(inputRange.value / 8 - 1)]
});