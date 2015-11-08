module.exports = function (content, file, settings) {
    var linkReg = /<link\s+([\s\S]*?["'\s\w\/\-])(?:>|$)|<!--inline\[([^\]]+)\]-->|<!--(?!\[)([\s\S]*?)(-->|$)/ig,
        hrefReg = /\shref\s*=\s*('|")(.*)[?&]__inline(?:[=&]|\1)/i,
        importReg = /\srel\s*=\s*('|")import\1/i,
        result;

    while ((result = linkReg.exec(content))) {
        if (result[1]) {
            if (importReg.test(result[0])) {
                var match = result[0].match(hrefReg);
                if (match) {
                    var info = fis.uri.getId(match[2], file.dirname);
                    file.addRequire(info.id);
                }
            }
        }
    }
};