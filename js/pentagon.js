function calculatePentagonArea(){
        const pentagonPi = getInputValueById('pentagon-pi');
        const pentagonBase = getInputValueById('pentagon-base');
        const area = pentagonPi * pentagonBase;

        setTextElementById('pentagon-area', area);
}