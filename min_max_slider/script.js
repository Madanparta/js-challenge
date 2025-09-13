const min = document.getElementById('min');
const max = document.getElementById('max');
const min_slider = document.getElementById('min_slider');
const max_slider = document.getElementById('max_slider');

function rangeSliderValidation(minVal, maxVal) {
    minVal = parseInt(minVal);
    maxVal = parseInt(maxVal);

    if (maxVal > 10000) {
        alert('Max value cannot be greater than 10000');
        maxVal = 10000;
    }

    if (minVal >= maxVal) {
        alert('Min value must be less than Max value');
        minVal = maxVal - 1;
    }

    min.value = minVal;
    max.value = maxVal;
    min_slider.value = minVal;
    max_slider.value = maxVal;
}

min_slider.addEventListener('input', () => {
    rangeSliderValidation(min_slider.value, max_slider.value);
});

max_slider.addEventListener('input', () => {
    rangeSliderValidation(min_slider.value, max_slider.value);
});

min.addEventListener('input', () => {
    rangeSliderValidation(min.value, max.value);
});

max.addEventListener('input', () => {
    rangeSliderValidation(min.value, max.value);
});
