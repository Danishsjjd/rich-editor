import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext"
import useLayoutEffectImpl from "../shared/useLayoutEffect"
import { registerEmoji } from "./emoji/EmojiPlugin"

export function ReactEmojiSetup() {
  const [editor] = useLexicalComposerContext()

  useLayoutEffectImpl(() => {
    return registerEmoji(editor)
  }, [editor])

  return null
}
