import React, { useState } from "react"
import Editor from "./Editor"
import Previewer from "./Previewer"
import { marked } from "marked"
import text from "default text/text"

export const Markdown = () => {
  const [editorScreen, setEditorScreen] = useState(false)
  const [previewerScreen, setPreviewerScreen] = useState(false)
  const [defaultText, setDefaultText] = useState(text)

  marked.setOptions({
    breaks: true,
  })

  const Markdown = () => {
    const htmlMarkUp = marked(defaultText)

    return { __html: htmlMarkUp }
  }

  const handleChange = (e) => {
    setDefaultText(e.target.value)
  }

  return (
    <div className="container">
      <Editor
        editorScreen={editorScreen}
        setEditorScreen={setEditorScreen}
        previewerScreen={previewerScreen}
        defaultText={defaultText}
        handleChange={handleChange}
      />
      <div className="separator"></div>
      <Previewer
        previewerScreen={previewerScreen}
        setPreviewerScreen={setPreviewerScreen}
        editorScreen={editorScreen}
        Markdown={Markdown()}
      />
    </div>
  )
}

export default Markdown
