function parallelogramArea(){
    const parallelogramBaseField = document.getElementById('parallelogram-base-field');
    const parallelogramBaseValue = parallelogramBaseField.value;
    const parallelogramBase = parseFloat(parallelogramBaseValue);

    parallelogramBaseField.value = '';

    const parallelogramHeightField = document.getElementById('parallelogram-height-field');
    const parallelogramHeightValue = parallelogramHeightField.value;
    const parallelogramHeight = parseFloat(parallelogramHeightValue);

    parallelogramHeightField.value = '';
    
    const area = parallelogramBase * parallelogramHeight;

    const parallelogramArea = document.getElementById('parallelogram-area');
    parallelogramArea.innerText = area;

    
}