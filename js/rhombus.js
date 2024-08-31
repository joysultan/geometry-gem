function calculateRhombusArea(){
    const rhombusArea1 = getInputValueById('rhombus-d1-field');
    const rhombusArea2 = getInputValueById('rhombus-d2-field');

    const area = rhombusArea1 * rhombusArea2;
    setTextElementById('rhombus-area', area);
}