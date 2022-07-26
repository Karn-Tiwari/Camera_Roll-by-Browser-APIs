module.exports = (function(){
    if(typeof window === 'object') {
        window.shortid = require('shortid');
        return true;
    }
    return false;
})();
