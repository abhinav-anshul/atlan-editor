import { useRef } from "react"
import Editor from "@monaco-editor/react"

function CodeEditor() {
  const editorRef = useRef(null)

  // eslint-disable-next-line no-unused-vars
  function handleEditorDidMount(editor, monaco) {
    editorRef.current = editor
  }

  return (
    <>
      <div>
        <Editor
          height="20vh"
          defaultLanguage="javascript"
          defaultValue="// some comment"
          onMount={handleEditorDidMount}
          theme="vs-dark"
        />
      </div>
    </>
  )
}

export { CodeEditor }
