class DisciplinaService {
    getAll(){
        const disciplinas = localStorage.getItem('disciplinas')
        return disciplinas ? JSON.parse(disciplinas) : []

    }

    get(id){
        
    }

    create(dados){
        const disciplinas = this.getAll()
        disciplinas.push(dados)
        localStorage.getItem('disciplinas', JSON.stringify(disciplinas))
        
    }

    update(id, dados){
        
    }

    delete(id){
        
    }
}