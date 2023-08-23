module.exports = {
    exportPathMap: function () {
      return {
        "/": { page: "/" },
      };
    },
    assetPrefix: process.env.BASE_PATH || "",
    basePath: process.env.NODE_ENV === 'production' ? '/next-calc-game' : '',
};  