"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var http = __importStar(require("http"));
var cors_1 = __importDefault(require("cors"));
var debug_1 = __importDefault(require("debug"));
var routes_users_db_1 = __importDefault(require("./routes-users-db"));
var app = express_1.default();
var server = http.createServer(app);
var port = 3000;
//const routes: Array<CommonRoutesConfig> = [];
var debugLog = debug_1.default('app');
app.use(express_1.default.json());
app.use(cors_1.default());
app.use(express_1.default.urlencoded());
app.use(express_1.default.static('public'));
app.use('/routes-users', routes_users_db_1.default);
var runningMessage = "Server running at http://localhost:" + port;
server.listen(port, function () {
    console.log(runningMessage);
});
