import '../styles/globals.css'
import Layout from '../components/Layout'
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { HomeOutlined, ArticleOutlined } from '@mui/icons-material';


const menuItens = [
  {text: 'Home' , icon: <HomeOutlined />, path: '/' },
  {text: 'Tela 1', icon: <ArticleOutlined />, path: '/demo/tela1' },
  {text: 'Tela 2', icon: <ArticleOutlined /> , path: '/demo/tela2' },
  {text: 'Estilos', icon: <MailIcon /> , path: '/estilos' },
  {text: '-', icon: null, path: ''},
  {text: 'Welcome', icon: <InboxIcon />, path: '/demo/welcome' },
  {text: 'Primary Search App Bar' , icon: <InboxIcon />, path: '/demo/primarySearchAppBar' },
  {text: 'Circular Integration', icon: <MailIcon /> , path: '/demo/circularIntegration' },
]

function MyApp({ Component, pageProps }) {

  return (
    <Layout menuItens={menuItens} titulo='Next.js Fundamentos'>
      <Component {...pageProps} />
    </Layout>
  ) 
    
}

export default MyApp
