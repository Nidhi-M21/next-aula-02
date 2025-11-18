

export default function saudar() {

    let mes= new Date().getMonth();
    mes=12;

    return (
        <>
            <p>Oláa!!!</p>
            <p>Estou a gostar!!</p>
            {mes==12?`ITSS TIMEEEE`:`AINDA NAO É NATAL`};
        </>
    )
}