import React, { useRef } from 'react';

interface TodoFormProps {
    onAdd(title: string): void
}


export const TodoForm: React.FC<TodoFormProps> = (props) => {
    // const [title, setTitle] = useState<string>('');
    const ref = useRef<HTMLInputElement>(null);
    // const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     setTitle(e.target.value);
    // }


    const handleEnterPress = (e: React.KeyboardEvent) => {
        if (e.key === "Enter") {
            // console.log(title);
            // setTitle('');
            props.onAdd(ref.current!.value);
            ref.current!.value = '';
        }
    }

    return (
        <div className="input-field mt2">
            <input
                // onChange={handleInput}
                onKeyPress={handleEnterPress}
                // value={title}
                ref={ref}
                type="text"
                id="title"
                placeholder="Enter a todo text" />
            <label htmlFor="title" className="active">
                Enter a todo text
            </label>
        </div>
    )
}