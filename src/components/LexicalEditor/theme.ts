import { EditorThemeClasses } from "lexical"

const editorTheme: EditorThemeClasses = {
  ltr: "ltr",
  rtl: "rtl",
  paragraph: "lexical-editor-paragraph",
  quote: "lexical-editor-quote",
  heading: {
    h1: "lexical-editor-heading-h1",
    h2: "lexical-editor-heading-h2",
    h3: "lexical-editor-heading-h3",
    h4: "lexical-editor-heading-h4",
    h5: "lexical-editor-heading-h5",
    h6: "lexical-editor-heading-h6",
  },
  list: {
    nested: {
      listitem: "lexical-editor-nested-listitem",
    },
    ol: "lexical-editor-list-ol",
    ul: "lexical-editor-list-ul",
    listitem: "lexical-editor-listItem",
    listitemChecked: "lexical-editor-listItemChecked",
    listitemUnchecked: "lexical-editor-listItemUnchecked",
  },
  hashtag: "lexical-editor-hashtag",
  image: "lexical-editor-image",
  link: "lexical-editor-link",
  text: {
    bold: "lexical-editor-textBold",
    italic: "lexical-editor-textItalic",
    underline: "lexical-editor-textUnderline",
    strikethrough: "lexical-editor-textStrikethrough",
    underlineStrikethrough: "lexical-editor-text-underlineStrikethrough",
    code: "lexical-editor-textCode",
    subscript: "lexical-editor-textSubscript",
    superscript: "lexical-editor-textSuperscript",
    // unknown
    overflowed: "lexical-editor-text-overflowed",
    hashtag: "lexical-editor-text-hashtag",
  },
  code: "lexical-editor-code",
  codeHighlight: {
    atrule: "lexical-editor-tokenAttr",
    attr: "lexical-editor-tokenAttr",
    boolean: "lexical-editor-tokenProperty",
    builtin: "lexical-editor-tokenSelector",
    cdata: "lexical-editor-tokenComment",
    char: "lexical-editor-tokenSelector",
    class: "lexical-editor-tokenFunction",
    "class-name": "lexical-editor-tokenFunction",
    comment: "lexical-editor-tokenComment",
    constant: "lexical-editor-tokenProperty",
    deleted: "lexical-editor-tokenProperty",
    doctype: "lexical-editor-tokenComment",
    entity: "lexical-editor-tokenOperator",
    function: "lexical-editor-tokenFunction",
    important: "lexical-editor-tokenVariable",
    inserted: "lexical-editor-tokenSelector",
    keyword: "lexical-editor-tokenAttr",
    namespace: "lexical-editor-tokenVariable",
    number: "lexical-editor-tokenProperty",
    operator: "lexical-editor-tokenOperator",
    prolog: "lexical-editor-tokenComment",
    property: "lexical-editor-tokenProperty",
    punctuation: "lexical-editor-tokenPunctuation",
    regex: "lexical-editor-tokenVariable",
    selector: "lexical-editor-tokenSelector",
    string: "lexical-editor-tokenSelector",
    symbol: "lexical-editor-tokenProperty",
    tag: "lexical-editor-tokenProperty",
    url: "lexical-editor-tokenOperator",
    variable: "lexical-editor-tokenVariable",
  },
}

export default editorTheme