import './styles.css'

function Search() {
  return (
    <div>
      <input
        type="text"
        placeholder="Digite o seu nome"
        // onChange={e => setStudentName(e.target.value)}
      />
      <select>Filtrar Busca</select>

      <button type="button" onClick="">
        Buscar
      </button>
    </div>
  )
}

export default Search
