'use strict';

module.exports = function (babel) {
  return {
    visitor: {
      JSXText: function (path) {
        const literal = path.node.value;

        if (literal.match(/\s/)) return;

        Object.keys(path.scope.bindings).forEach(function (key) {
          const binding = path.scope.bindings[key];

          if (binding.identifier.name === literal) {
            const tagName = path.parent.openingElement.name.name;
            console.warn(
              `Warning: A scoped variable was found as a JSX text literal. Did you mean ` +
              `\`<${tagName}>{${literal}}</${tagName}>\` instead of ` +
              `\`<${tagName}>${literal}</${tagName}>\`?`
            );
          }
        });
      }
    }
  };
};
