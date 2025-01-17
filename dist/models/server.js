"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var peluquero_1 = __importDefault(require("../routes/peluquero"));
var Server = /** @class */ (function () {
    function Server() {
        this.app = (0, express_1.default)();
        this.port = process.env.PORT || '4000';
        this.routes();
    }
    Server.prototype.listen = function () {
        var _this = this;
        this.app.listen(this.port, function () {
            console.log('Aplicacion corriendo por el puerto', _this.port);
        });
    };
    Server.prototype.routes = function () {
        this.app.use('/api/peluquero', peluquero_1.default);
    };
    return Server;
}());
exports.default = Server;
