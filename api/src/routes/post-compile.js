const demCore = require('@enspirit/dem-core-rescript');

async function compile(style, text, data) {
  const compilation_promise = demCore.compile(
    {
      template_fco: undefined, /* html template (pass undefined to use the default one shipped with dem) */
      style_fco: { TAG: 1, _0: style },
      text_fco: { TAG: 1, _0: text },
      data_fco: { TAG: 1, _0: data },
      watch_mode: false,
      base_url_opt: undefined,
      output_filename_opt: undefined,
      publipost: false,
      async: true
    }
  );
  const result = await compilation_promise._0;
  return result[0];
};

module.exports = (req, res, next) => {
  res.setHeader('Content-Type', 'text/plain');

  const result = compile(null, null, null);
  res.write(result);
  res.end(undefined);
};
