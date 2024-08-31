function calculateRectangleAre(){
    const rectangleWidth = getInputValueById('rectangle-width-field');
    
    const rectangleLength = getInputValueById('rectangle-length-field');
    const area = rectangleWidth * rectangleLength;

     setTextElementById('rectangle-area', area);

}