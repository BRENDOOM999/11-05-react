import React from 'react'

import DisciplinaService from '../services/academico/DisciplinaService';

const DisciplinaLista = () => {

    const [disciplinas, setDiciplinas] = useState([])

    useEffect(() => {
        setDiciplinas(DisciplinaService.getAll())

    }, [])

    console.log(disciplinas);




  return (
    <div>

        <h1>DisciplinaLista</h1>





    </div>
  )
}

export default DisciplinaLista