// This file is optional and can be used to configure pnpm behavior
// For now, we'll keep it simple

module.exports = {
  hooks: {
    readPackage(pkg) {
      return pkg;
    },
  },
};

