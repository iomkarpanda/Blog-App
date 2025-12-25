import { useEffect, useRef } from "react";
import EditorJS from "@editorjs/editorjs";

// Block tools
import Paragraph from "@editorjs/paragraph";
import Header from "@editorjs/header";
import List from "@editorjs/list";
import Quote from "@editorjs/quote";
import Checklist from "@editorjs/checklist";
import Delimiter from "@editorjs/delimiter";
import Code from "@editorjs/code";
import Table from "@editorjs/table";
import Warning from "@editorjs/warning";

// Media
import Embed from "@editorjs/embed";
import LinkTool from "@editorjs/link";

// Inline tools
import Marker from "@editorjs/marker";
import InlineCode from "@editorjs/inline-code";

function EditorComponent() {
  const editorRef = useRef(null);

  useEffect(() => {
    const editor = new EditorJS({
      holder: "editorjs",

      autofocus: true,
      placeholder: "Start writing here...",

      tools: {
        paragraph: {
          class: Paragraph,
          inlineToolbar: true,
        },

        header: {
          class: Header,
          inlineToolbar: true,
          config: {
            levels: [2, 3, 4],
            defaultLevel: 2,
          },
        },

        list: {
          class: List,
          inlineToolbar: true,
        },

        quote: {
          class: Quote,
          inlineToolbar: true,
          config: {
            quotePlaceholder: "Enter quote",
            captionPlaceholder: "Quote author",
          },
        },

        checklist: {
          class: Checklist,
          inlineToolbar: true,
        },

        delimiter: Delimiter,

        code: Code,

        table: {
          class: Table,
          inlineToolbar: true,
        },

        warning: {
          class: Warning,
          inlineToolbar: true,
          config: {
            titlePlaceholder: "Title",
            messagePlaceholder: "Message",
          },
        },

        embed: Embed,

        linkTool: {
          class: LinkTool,
          config: {
            // ⚠️ Replace with your backend later
            endpoint: "https://jsonplaceholder.typicode.com/posts",
          },
        },

        marker: Marker,
        inlineCode: InlineCode,
      },

      onReady: () => {
        console.log("Editor.js is ready");
      },
    });

    editorRef.current = editor;

    return () => {
      if (editorRef.current) {
        editorRef.current.isReady
          .then(() => {
            editorRef.current.destroy();
            editorRef.current = null;
          })
          .catch(() => {});
      }
    };
  }, []);

  const saveData = async () => {
    if (!editorRef.current) return;
    const data = await editorRef.current.save();
    console.log("Saved data:", data);
  };

  return (
    <>
      <div id="editorjs" />
      <button
        onClick={saveData}
        className="px-4 py-2 mt-4 bg-amber-600 text-white rounded"
      >
        Save
      </button>
    </>
  );
}

export default EditorComponent;
