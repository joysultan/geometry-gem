function calculateTriangleArea(){
    const triangleBase = getInputValueById('triangle-base');
    const triangleHeight = getInputValueById('triangle-height');

    const area = triangleBase * triangleHeight;
    setTextElementById('triangle-area', area);
    
    
}