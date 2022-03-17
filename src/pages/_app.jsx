import React from 'react';
import '../styles/globals.css'
import Layout from '../components/Layout'
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { HomeOutlined, ArticleOutlined } from '@mui/icons-material';
import { MyProvider } from '../components/MyContext'


const menuItens = [
  {text: 'Home' , icon: <HomeOutlined />, path: '/' },
  {text: 'Tela 1', icon: <ArticleOutlined />, path: '/demo/tela1' },
  {text: 'Tela 2', icon: <ArticleOutlined /> , path: '/demo/tela2' },
  {text: 'Estilos', icon: <MailIcon /> , path: '/estilos' },
  {text: '-', icon: null, path: ''},
  {text: 'Welcome', icon: <InboxIcon />, path: '/demo/welcome' },
  {text: 'Primary Search App Bar' , icon: <InboxIcon />, path: '/demo/primarySearchAppBar' },
  {text: 'Circular Integration', icon: <MailIcon /> , path: '/demo/circularIntegration' },
  {text: 'Split', icon: <MailIcon /> , path: '/split1' },
]


// component
function MyApp({ Component, pageProps }) {

  const msg='mensagem do MyContext'

  return (
    <MyProvider>

      <Layout menuItens={menuItens} titulo='Next.js Fundamentos'>

        <Component {...pageProps} />

      </Layout>

    </MyProvider>
  ) 
    
}

export default MyApp
