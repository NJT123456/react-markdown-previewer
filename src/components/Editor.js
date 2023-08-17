import React from "react"
import { FaFreeCodeCamp } from "react-icons/fa"
import { BsArrowsAngleContract, BsArrowsFullscreen } from "react-icons/bs"

const Editor = (props) => {
  const {
    editorScreen,
    setEditorScreen,
    previewerScreen,
    defaultText,
    handleChange,
  } = props

  const toggleFullScreen = () => {
    setEditorScreen(!editorScreen)
  }

  return (
    <div
      className={`editorWrap ${
        editorScreen ? "maximized" : previewerScreen ? "hide" : ""
      }`}>
      <div className="toolbar">
        <div className="container-text">
          <FaFreeCodeCamp className="icon-free" />
          Editor
        </div>
        {editorScreen ? (
          <BsArrowsAngleContract
            className="icon-show"
            onClick={toggleFullScreen}
          />
        ) : (
          <BsArrowsFullscreen
            className="icon-show"
            onClick={toggleFullScreen}
          />
        )}
      </div>

      <textarea
        id="editor"
        type="text"
        value={defaultText}
        onChange={handleChange}></textarea>
    </div>
  )
}

export default Editor
