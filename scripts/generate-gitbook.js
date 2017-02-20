var CMDDESC="Generate GitBook";

./node_modules/.bin/gitbook build ./txt ./gh-pages

main();

function main() {
    var input = './txt';
    var output = './_book';

    fs.mkdir(output, function() {
        // if it dir exists already, just override content
        generateGitbook(input, output, function(err) {
            if(err) {
                return console.error(err);
            }

            console.log('Gitbook generado.');
        });
    });
}

function generateGitbook(input, output, cb) {
    async.series([
        fs.copy.bind(null,
            input,
            output
        ),
        fs.copy.bind(null,
            path.join(input, 'README.md'),
            path.join(output, 'Home.md')
        ),
        generateSidebar.bind(null, {
            input: path.join(input, 'SUMMARY.md'),
            output: path.join(output, '_Sidebar.md')
        }),
        fs.remove.bind(null, path.join(output, 'README.md')),
        fs.remove.bind(null, path.join(output, 'SUMMARY.md')),
    ], cb);
}

function generateSidebar(config, cb) {
    var data = fs.readFileSync(config.input, {
        encoding: 'utf8'
    });

    data = data.replace(/.md/g, '');

    fs.writeFile(config.output, data, cb);
}

