import ReactQuill from "react-quill"
import 'react-quill/dist/quill.snow.css';
const modules = {
    toolbar: [
        [{ header: [1, 2, false] }],
        ['bold', 'italic', 'underline', 'strike'],
        [{ color: [] }, { background: [] }],
        [{ align: [] }],
        ['link'],
        [{ list: 'ordered' }],
    ],
};

const Editor = ({ body, BodyChange }) => {
    return (
        <div className=" sm:w-2/3 sm:mx-auto mb-10">
            <ReactQuill
                className='h-60 mb-5'
                value={body}
                onChange={BodyChange}
                theme='snow'
                modules={modules}
                placeholder="type here"
            />
        </div>
    )
}

export default Editor