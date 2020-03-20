"use strict";
exports.__esModule = true;
function fire() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var Swal = this;
    return new (Swal.bind.apply(Swal, [void 0].concat(args)))();
}
exports.fire = fire;
