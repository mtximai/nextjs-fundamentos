// navegação dinâmica - curso react aula 95

import Layout from "../../components/Layout2";
import {useRouter} from 'next/router'
import {useEffect} from 'react'

export default function ClientePorCodigo() {
   const router = useRouter()

   useEffect(() => {
      console.log(router.query.codigo)
   }, [router.query.codigo])

   return (
      <Layout titulo="Navegação Dinâmica">
         <span>Código = {router.query.codigo}</span>
      </Layout>
   )
}