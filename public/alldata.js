function AllData(){
    const [data, setData] = React.useState('');
    const [aux, setAux] = React.useState('');
    var matriz = [];

    var mio = {}
    React.useEffect(() => {
        
        // fetch all accounts from API
        fetch('/account/all')
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setData(JSON.stringify(data));
                mio = {data};
                setAux(JSON.stringify(mio.data[0].name))
                Array.from({ length: mio.data.length }).map((_, index) => (
                    matriz.push(mio.data[index].name)
                ))
                console.log(matriz)
            });

    }, []);

    return (<>
        <h5>All Data in Store:</h5>
        {data}
    </>);
}
