import { useState } from "react";
import {
  Button,
  Card,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import Head from "next/head";
import { CopyToClipboard } from 'react-copy-to-clipboard';

import CSS from '../styles/Home.module.css';

export default function Home() {

  const [copied, setCopied] = useState<boolean>(false);

  const accountData: string[] = [
    'Gloria Salinas',
    '11.363.728-5',
    'gloria.contacto@gmail.com',
    'Cuenta Vista',
    'Banco Estado',
    '11363728',
  ];

  return (
    <>
      <Head>
        <title>Mi Cuenta RUT</title>
        <meta name="description" content="Datos de transferencia de la Tía Gloria." />
        <meta property="og:title" content="Mi Cuenta RUT" />
        <meta property="og:type" content="image/jpeg" />
        <meta property="og:url" content="https://www.tiagloria.cl" />
        <meta property="og:image" content="https://www.tiagloria.cl/share.jpg" />
        <link rel="icon" type="image/png" href="/favicon.png" />
        <link rel="manifest" href="/manifest.json"></link>
      </Head>
      <Box className={CSS.container}>
        <Card className={CSS.card}>
          <Typography className={CSS.title} variant="h4">
            Mi cuenta Rut
          </Typography>
          <TableContainer component={Paper} sx={{ backgroundColor: "transparent" }} elevation={0}>
            <Table className={CSS.table} sx={{ minWidth: "300px" }}>
              <TableBody>
                <>
                  {accountData && accountData.map((data, index) => {
                    return (
                      <TableRow key={'row-'+index} className={CSS.row}>
                        <TableCell key={'cell-'+index} className={CSS.celda} align="center">
                          <Typography>{data}</Typography>
                        </TableCell>
                      </TableRow>
                    )
                  })}
                </>
              </TableBody>
            </Table>
          </TableContainer>
          <CopyToClipboard text={accountData.join('\n')}>
            <Button className={CSS.button} onClick={() => {setTimeout(() => setCopied(false), 3000); setCopied(true); }} variant={'contained'}>
              { copied ? 'Listo!' : 'Copiar Datos' }
            </Button>
          </CopyToClipboard>
        </Card>
      </Box>
    </>
  );
}
