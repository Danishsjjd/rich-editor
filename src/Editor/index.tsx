import { LexicalComposer, type InitialConfigType } from "@lexical/react/LexicalComposer"
import { ContentEditable } from "@lexical/react/LexicalContentEditable"
import LexicalErrorBoundary from "@lexical/react/LexicalErrorBoundary"
import { MultipleEditorStorePlugin } from "./plugins/MultipleEditorStorePlugin"
import { RichTextPlugin } from "./plugins/ReactRichTextPlugin"
import { EmojiNode } from "./plugins/emoji/EmojiNode"
import editorTheme from "./theme"
import { $createParagraphNode, $createTextNode, $getRoot } from "lexical"
import { ReactEmojiSetup } from "./plugins/ReactEmojiSetup"

const config: InitialConfigType = {
  namespace: "Lexical markdown editor",
  onError: (e) => {
    // TODO: handle error
    console.error(e)
  },
  theme: editorTheme,
  nodes: [EmojiNode],
  editorState() {
    const root = $getRoot()

    if (root.getFirstChild() !== null) return

    // const heading = $createHeadingNode("h1")
    // heading.append($createTextNode("Welcome to the Vanilla JS Lexical Demo!"))
    // root.append(heading)
    // const quote = $createQuoteNode()
    // quote.append(
    //   $createTextNode(
    //     `In case you were wondering what the text area at the bottom is – it's the debug view, showing the current state of the editor. `
    //   )
    // )
    // root.append(quote)

    const paragraph = $createParagraphNode()
    paragraph.append(
      $createTextNode("This is a demo environment built with "),
      $createTextNode("lexical").toggleFormat("code"),
      $createTextNode("."),
      $createTextNode(" Try typing in "),
      $createTextNode("some text").toggleFormat("bold"),
      $createTextNode(" with "),
      $createTextNode("different").toggleFormat("italic"),
      $createTextNode(" formats.")
    )
    root.append(paragraph)
  },
}

const Editor = ({ id }: { id: string }) => {
  return (
    <LexicalComposer initialConfig={config}>
      <section className="max-w-2xl mx-auto my-6 rounded-xl border relative overflow-hidden">
        <RichTextPlugin
          contentEditable={<ContentEditable className="py-4 px-3 w-full max-w-2xl rounded-xl prose" />}
          placeholder={
            <div className="text-gray-400 overflow-hidden absolute top-4 left-3">Enter some rich text...</div>
          }
          ErrorBoundary={LexicalErrorBoundary}
        />
      </section>

      <ReactEmojiSetup />
      <MultipleEditorStorePlugin id={id} />
    </LexicalComposer>
  )
}

export default Editor
