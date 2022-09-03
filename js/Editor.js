function Editor() {
  const editorCompiler = document.getElementById("compiler-editor-js");
  var editor = CodeMirror.fromTextArea(editorCompiler, {
    lineNumbers: true,
    mode:  "javascript",
    tabSize: 4
  });
}

export default Editor;

