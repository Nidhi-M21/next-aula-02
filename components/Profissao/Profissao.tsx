interface ProfissaoPops {
    titulo: string;
    descricao: string;
}



export default function Profissao({ titulo, descricao }: ProfissaoPops) {
    return <div className="p-2 bg-blue-500">
            <h2>{titulo}</h2>
            <p>{descricao}</p>

        <div/>
        
}