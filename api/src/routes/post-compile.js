const demCore = require('@enspirit/dem-core-rescript');

async function compile(style, text, data) {
  const compilation_promise = demCore.compile(
    { TAG: 0, _0: undefined }, // template_fco: html template (pass undefined to use the default one shipped with dem) */
    { TAG: 1, _0: style },     // style_fco
    { TAG: 1, _0: text },      // text_fco
    { TAG: 1, _0: data },      // data_fco
    { TAG: 0, _0: undefined }  // partials
  );
  const result = await compilation_promise._0;
  return result[0];
};

module.exports = async (req, res, next) => {
  res.setHeader('Content-Type', 'text/plain');

  const result = await compile("", "", {})
  res.write(result);
  res.end(undefined);
};
