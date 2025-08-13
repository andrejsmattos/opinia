"use strict";

var _client = require("react-dom/client");
var _app = _interopRequireDefault(require("./app"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const container = document.getElementById('root');
const root = (0, _client.createRoot)(container);
root.render(/*#__PURE__*/React.createElement(_app.default, null));