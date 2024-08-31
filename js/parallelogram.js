function parallelogramArea(){
    const parallelogramBase = getInputValueById('parallelogram-base-field');

    const parallelogramHeight = getInputValueById('parallelogram-height-field');

    const area = parallelogramBase * parallelogramHeight;

    setTextElementById('parallelogram-area', area)

    
}