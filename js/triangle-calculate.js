function calculateTriangleArea(){
    const triangleBaseInput = document.getElementById('triangle-base');
    const triangleBaseValue = triangleBaseInput.value;
    const base = parseFloat(triangleBaseValue)
    
    const triangleHeightInput = document.getElementById('triangle-height');
    const triangleHeightValue = triangleHeightInput.value;
    const height = parseFloat(triangleHeightValue);
    const area = 0.5 * base * height;
    console.log('are of the triangle:', area);

    const triangleArea = document.getElementById('triangle-area');
    triangleArea.innerText = area;
    
    
}