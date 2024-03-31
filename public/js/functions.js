
const charming = require('charming');

const element = document.querySelector('.subtext');


charming(element,{
    //tagName: 'h2'
    split: function(delimiter){
        return delimiter.split(/\s/g);
    },
    // setClassName: function(index,elem){
    //     return elem+index;
    // }

});