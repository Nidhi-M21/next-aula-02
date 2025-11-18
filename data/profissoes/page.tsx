import Profissao from '@/components/Profissao/Profissao'
import {profissoes} from '@/data/profissoes'

export default function ProfissoesPage(){
    return <>
    <h2>Lista Professores</h2>
    {profissoes.map((profissao,i)=>(
        <Profissao
        titulo={profissao.titulo}
        descricao={profissao.descricao}
        />
    )) }

    </>

}