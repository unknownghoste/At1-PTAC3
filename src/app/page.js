'use server' //trabalha do lado do servidor. Async também. Apareceu use server tem componente de servidor.
//"Hook e React foi feito todo para o lado client."
 
const url = "https://back-end-ifms-seven.vercel.app/";

export default async function Home() {
  const resposta = await fetch(url, { //next tem pre render, quando o user entra em cada página, é salva na mémoria. Salva a última informação vista.
    next: {
      revalidate: 1 //a cada 1 segundo ele verifica se tem modificações e novas informações. É o melhor para salvar.
    },
    //a opção de "cache: "no-cache"" manda todas as informações sem esperar.
    method: "GET",
    headers: {'Content-Type': 'application/json'}
  });
  const campi = await resposta.json();

  return( 
    <main>
      <h1> Home </h1>
      {campi.map((campus) => 
      
      <div>
        <p>{campus.nome_campi}</p>
      </div>
      )
      }
    </main>
  ) 
}
