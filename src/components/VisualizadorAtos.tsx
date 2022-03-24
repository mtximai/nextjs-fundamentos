// 19/03/22

import React from 'react'
import { Box, Grid, SvgIconProps, Typography } from '@mui/material';
import Split from 'react-split'
import TreeView from '@mui/lab/TreeView';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import TreeItem, { TreeItemProps, treeItemClasses } from '@mui/lab/TreeItem';
import { styled, useTheme } from '@mui/material/styles';

import styles from '../styles/VisualizadorAtos.module.css'
import { fontSize } from '@mui/system';

const MyItem = styled(TreeItem)({
  fontSize:'10px'
})

interface iPeca {
  id: number
  nm_peca: string
}

interface iProps {
  codProtocolo: string,
  atos: iPeca[]
}

declare module 'react' {
  interface CSSProperties {
    '--tree-view-color'?: string;
    '--tree-view-bg-color'?: string;
  }
}

type StyledTreeItemProps = TreeItemProps & {
  bgColor?: string;
  color?: string;
  labelIcon: React.ElementType<SvgIconProps>;
  labelInfo?: string;
  labelText: string;
};

const StyledTreeItemRoot = styled(TreeItem)(({ theme }) => ({
  color: theme.palette.text.secondary,
  [`& .${treeItemClasses.content}`]: {
    color: theme.palette.text.secondary,
    borderTopRightRadius: theme.spacing(2),
    borderBottomRightRadius: theme.spacing(2),
    paddingRight: theme.spacing(1),
    fontWeight: theme.typography.fontWeightMedium,
    '&.Mui-expanded': {
      fontWeight: theme.typography.fontWeightRegular,
    },
    '&:hover': {
      backgroundColor: theme.palette.action.hover,
    },
    '&.Mui-focused, &.Mui-selected, &.Mui-selected.Mui-focused': {
      backgroundColor: `var(--tree-view-bg-color, ${theme.palette.action.selected})`,
      color: 'var(--tree-view-color)',
    },
    [`& .${treeItemClasses.label}`]: {
      fontWeight: 'inherit',
      color: 'inherit',
    },
  },
  [`& .${treeItemClasses.group}`]: {
    marginLeft: 0,
    [`& .${treeItemClasses.content}`]: {
      paddingLeft: theme.spacing(2),
    },
  },
}));

function StyledTreeItem(props: StyledTreeItemProps) {
  const {
    bgColor,
    color,
    labelIcon: LabelIcon,
    labelInfo,
    labelText,
    ...other
  } = props;

  return (
    <StyledTreeItemRoot
      label={
        <Box sx={{ display: 'flex', alignItems: 'center', p: 0.5, pr: 0 }}>
          <Box component={LabelIcon} color="inherit" sx={{ mr: 1 }} />
          <Typography variant="body2" sx={{ fontWeight: 'inherit', flexGrow: 1 }}>
            {labelText}
          </Typography>
          <Typography variant="caption" color="inherit">
            {labelInfo}
          </Typography>
        </Box>
      }
      style={{
        '--tree-view-color': color,
        '--tree-view-bg-color': bgColor,
      }}
      {...other}
    />
  );
}


export default function VisualizadorAtos<iProps>({ codProtocolo, atos }) {

  function f_itemClick(e) {
    console.log(atos.find((p) => p.id==e))
  }


  return (

    // <Box sx={{ flexGrow: 1, height:'800px', border:'1px solid red'}}>

    <Grid
      container
      direction='column'
      spacing={0}
      margin='0px'
      padding='5px'
      borderRadius='5px'
      sx={{backgroundColor:'#ccc' }}
    >
      {/* <Grid
        item xs={12}
        alignSelf='center'
        style={{backgroundColor:'#ccc', color:'blue'}}
      >
        <Typography fontWeight='bold'>Visualizador de Atos: {codProtocolo}</Typography>
      </Grid> */}

      <Grid
        item xs={12}
        padding='5px'
        borderRadius='5px'
        // border='1px solid green'
        sx={{backgroundColor:'#cdcde6'}}
      >

        <Split
          sizes={[40,60]}
          minSize={[10,30]}
          style={{ display:'flex'}}
        >
  
          <div
            style={{ overflow:'scroll',}}
          >
            <TreeView
              aria-label="file system navigator"
              defaultCollapseIcon={<ExpandMoreIcon />}
              defaultExpandIcon={<ChevronRightIcon />}
              sx={{
                color:'blue'
              }}
            >
              <TreeItem nodeId="0" label={codProtocolo} sx={{height:'80vh'}}>
                { atos && atos.map( (p, i) =>
                  <TreeItem
                    nodeId={`${i+1}`}
                    label={`${p.id} - ${p.nm_peca}`}
                    key={p.id+1}
                    onClick={() => f_itemClick(p.id)}
                    sx={{}}
                  />
                )}
              </TreeItem>
            </TreeView>

          </div>

          <div style={{ overflow:'scroll' }}>
            <iframe
              src="https://portal.tcm.sp.gov.br/Management/GestaoPublicacao/Documento?id=86618"
              height='99%'
              width='100%'
            />

          </div>

        </Split>

      </Grid>

    </Grid>

    //</Box>

  )
}
