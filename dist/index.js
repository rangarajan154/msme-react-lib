function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));

var styles = {"test":"_3ybTi"};

var ExampleComponent = function ExampleComponent(_ref) {
  var text = _ref.text,
      shape = _ref.shape;
  return /*#__PURE__*/React.createElement("div", {
    className: styles.test
  }, "Am changing my library.......... Example Component: ", text, ", ", shape);
};

exports.ExampleComponent = ExampleComponent;
//# sourceMappingURL=index.js.map
