import { useState, useCallback } from 'react'
import Home from './components/Home'

function App() {
    const [list, setList] = useState([]);

    const searchSolr = useCallback(async (query) => {
        if (!query || query.trim().length < 3) {
            setList([]);
            return;
        }

        const term = query.trim();
        const solrQuery = `(${term} OR *${term}* OR ${term}~3)`;

        try {
            const response = await fetch(`http://localhost:5000/busca?q=${encodeURIComponent(solrQuery)}`);
            const data = await response.json();
            setList(data.resultados);
        } catch (err) {
            console.error("Erro ao buscar no Solr:", err);
            setList([]);
        }
    }, []);

    return (
        <Home
            list={list}
            searchSolr={searchSolr}
        />
    );
}

export default App
