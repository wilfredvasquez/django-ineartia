import React, {useState, useEffect} from 'react'
import NoteForm from './Note/NoteForm'
import { useIsFocused } from '@react-navigation/native'
import useInertia from '../hooks/useInertia';
import { getViewGET } from '../api/getView';

export default function NoteEdit(props) {
    const { route: { params } } = props;
    const { setValues } = useInertia();
    const [note, setNote] = useState({})
    const isFocused = useIsFocused();

    useEffect(() => {
        (async() =>{
            const response = await getViewGET(`notes/detail/${params.id}`);
            setValues(response.data);
            setNote(response.data.props.note)
        })()
    },[isFocused])

    return (
        <NoteForm note={note} url={`notes/edit/${params.id}`} title="Edit Note"  />
    )
}
