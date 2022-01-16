
import React, { FC } from 'react'
import INote from '../../Interface/node_interface';
import '../Note/Note.css'

type Props = {
    note : INote
}

const Note: FC<Props> = ({note}) => {
    return (
        <>
            <div className="note" >
                <div className="note__text">{note.text}</div>
                <div className="note__link">
                    <a href={note.link}>{note.link}</a>
                </div>
            </div>
        </>
    )
}

export default Note;
