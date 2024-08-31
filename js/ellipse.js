function calculateEllipseArea(){
    const ellipseMejor = getInputValueById('ellipse-major-radius');
    const ellipseMinor = getInputValueById('ellipse-minor-raius');

    const area = ellipseMejor * ellipseMinor;
    setTextElementById('ellipse-area', area)
}