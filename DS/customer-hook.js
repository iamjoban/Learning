const useUserOnlineStatus = (initialValue) =>{
    let [id, setId] = useState(initialValue);
    let [status, setStatus] = useState(false);

    useEffect(async()=>{
        //make some api call
        let {status} = await api();
        setStatus(status);
    },[id])

    return [status, setId];
}

const Component = (props)=>{
    let [status, setId]= useUserOnlineStatus(props.id);
    useEffect(async()=>{
        setId(props.id);
    },[props.id])

}
