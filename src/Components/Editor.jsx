import EditorJS from '@editorjs/editorjs';
import List from "@editorjs/list";
import Header from "@editorjs/header";
import Paragraph from '@editorjs/paragraph';
import { useEffect,useRef } from 'react';

function EditorComponent(){
    const editorRef = useRef(null);
    const divRef = useRef(null);

    // Setupping the editor 

    useEffect(() => {
        if (divRef.current && !editorRef.current) {
            editorRef.current = new EditorJS({
                holder: divRef.current,
                tools:{
                    list:List,
                    header:Header,
                    paragraph: Paragraph,
                },
                defaultBlock: 'paragraph',
            });
        }
    // Cleaning the previous editor instance if present

    return ()=>{
            if (editorRef.current && typeof editorRef.current.destroy === 'function') {
                editorRef.current.destroy();
            }
            editorRef.current = null;
        };

    }, []);

    const saveData = async () =>{
        const data = await editorRef.current.save();
        console.log(data)
    }

    return (
        <>
            <div ref={divRef}></div>
            <button onClick={saveData} className='size-10 bg-amber-600'>Save</button>
        </>
    )


    
}


export default EditorComponent;