/*
Language: Marke37
Author: Carlos Ramos <carlos@ramoscarlos.com>
Website: https://daringfireball.net/projects/markdown/
Category: common, markup
*/

hljs.registerLanguage('marke37', function (hljs) {
    /* SECTIONS */
    TITLE = {
        className: 'title',
        variants: [
        {
            begin: '(?=^.+?\\n[=-]{2,}$)',
            contains: [
              { begin: '^[=-]*$' },
              {
                begin: '^',
                end: "\\n",
            }
            ]
        }
        ]
    };

    PRECHORUS = {
        className: 'prechorus',
        scope: 'string',
        begin: /\#{2}(?!\s)/,
        end: /\#{2}/
    };

    CHORUS = {
        className: 'chorus',
        scope: 'string',
        begin: /\*{2}(?!\s)/,
        end: /\*{2}/
    };

    POSTCHORUS = {
        className: 'postchorus',
        scope: 'string',
        begin: /\${2}(?!\s)/,
        end: /\${2}/
    };

    BRIDGE = {
        className: 'bridge',
        scope: 'string',
        begin: /\_{1}(?!\s)/,
        end: /\_{1}/
    };

    INTRO = {
        className: 'intro',
        scope: 'string',
        begin: /\_{1}\*{2}(?!\s)/,
        end: /\*{2}\_{1}/
    };

    OUTRO = {
        className: 'outro',
        scope: 'string',
        begin: /\*{2}\_{1}(?!\s)/,
        end: /\_{1}\*{2}/
    };

    /* VOICE MODIFICATIONS */
    YELLING = {
        className: 'yelling',
        scope: 'string',
        begin: /\|{1}(?!\s)/,
        end: /\|{1}/
    };

    return {
        name: 'Marke37',
        contains: [
            // Sections.
            TITLE,
            INTRO,
            OUTRO,
            POSTCHORUS,
            PRECHORUS,
            CHORUS,
            BRIDGE,
            // Voice modifications.
            YELLING,
        ]
    };
});