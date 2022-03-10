import '../styles/globals.css'
import Layout from '../components/Layout'
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

const menuItens = [
  {text: 'Home' , icon: <InboxIcon />, path: '/' },
  {text: 'Toolbar' , icon: <InboxIcon />, path: '/toolbar' },
  {text: 'Teste componentes' , icon: <InboxIcon />, path: '/testeComponentes' },
  {text: '-', icon: null, path: ''},
  {text: 'Welcome', icon: <InboxIcon />, path: '/demo/welcome' },
  {text: 'Tela 1', icon: <InboxIcon />, path: '/demo/tela1' },
  {text: 'Tela 2', icon: <MailIcon /> , path: '/demo/tela2' },
]

function MyApp({ Component, pageProps }) {

  return (
    <Layout menuItens={menuItens} titulo='Next.js Fundamentos'>
      <Component {...pageProps} />
    </Layout>
  ) 
    
}

export default MyApp
