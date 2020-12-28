import { useState, useEffect } from "react";
var usescreenSize = function () {
    var _a = useState({
        innerWidth: 0,
        innerHeight: 0,
        outerWidth: 0,
        outerHeight: 0
    }), screenWidth = _a[0], setscreenWidth = _a[1];
    var updateScreenSize = function () {
        setscreenWidth({
            innerWidth: window.innerWidth,
            innerHeight: window.innerHeight,
            outerWidth: window.outerWidth,
            outerHeight: window.outerHeight,
        });
    };
    useEffect(function () {
        updateScreenSize();
        window.addEventListener("resize", updateScreenSize);
        return function () { return window.removeEventListener("resize", updateScreenSize); };
    }, []);
    return screenWidth;
};
export default usescreenSize;
//# sourceMappingURL=usescreenSize.js.map