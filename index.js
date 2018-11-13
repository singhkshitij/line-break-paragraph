const LineBreakParagraph = function(string) {
    "use strict";

    let convertedString = "";
    const strArray = string.split(/\.\s/);

    strArray.forEach(element => {
        convertedString = convertedString + element.trim() + ".\n";
    });

    return convertedString.trim().replace(/\.$/, '');
};

module.exports = LineBreakParagraph;
