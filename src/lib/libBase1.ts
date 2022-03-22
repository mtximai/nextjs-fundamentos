// 14/03/22 - Lib padrão (Mauro)


// Chamada ao serviço
// 1) Retorna uma promise
// 2) Se der resposta diferente de 200 retorna null
// Ex: 204 No content
export async function getService(url: string) {

  return new Promise( (resolve, reject) => {
    fetch(url)
      .then((response) => {
        //console.log(response.status)

        return (response.status == 200) ? response.json() : null
      })
      .then( (data) => {
        resolve(data)
      })
      .catch(e => reject(e))
  })
}

export async function getServiceCallback(url: string, cbSucesso: any, cbErro: any) {

  fetch(url)
    .then((response) => {
      return (response.status == 200) ? response.json() : null
    })
    .then( (data) => {
      cbSucesso(data)
    })
    .catch(e => cbErro(e))
}
