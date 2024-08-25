function calculateRectangleAre(){
    const rectangleWidthField = document.getElementById('rectangle-width-field');
    const rectangleWidthValue = rectangleWidthField.value;
    const rectangleWidth = parseFloat(rectangleWidthValue);
    rectangleWidthField.value = '';
    
    const rectangleLengthField = document.getElementById('rectangle-length-field');
    const rectangleLengthValue = rectangleLengthField.value;
    const rectangleLength = parseFloat(rectangleLengthValue);
    const area = rectangleWidth * rectangleLength;
    const rectangleArea = document.getElementById('rectangle-area');
    rectangleArea.innerText = area;
    rectangleLengthField.value = '';

}