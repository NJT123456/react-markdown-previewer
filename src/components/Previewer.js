import React from "react"
import { FaFreeCodeCamp } from "react-icons/fa"
import { BsArrowsAngleContract, BsArrowsFullscreen } from "react-icons/bs"

const Previewer = (props) => {
  const { previewerScreen, setPreviewerScreen, editorScreen, Markdown } = props

  const toggleFullScreen = () => {
    setPreviewerScreen(!previewerScreen)
  }

  return (
    <div
      className={`previewWrap ${previewerScreen ? "maximized" : editorScreen ? "hide" : ""}`}>
      <div className="toolbar">
        <div className="container-text">
          <FaFreeCodeCamp className="icon-free" />
          Previewer
        </div>
        {previewerScreen ? (
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

      <div id="preview" type="text" dangerouslySetInnerHTML={Markdown}></div>
    </div>
  )
}

export default Previewer
