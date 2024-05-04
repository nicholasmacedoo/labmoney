import { 
    Box, 
    Button, 
    Card, 
    CardContent,
    Grid, 
    TextField, 
    Typography, 
    Table, 
    TableHead, 
    TableRow, 
    TableCell, 
    TableBody,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Pagination
} from '@mui/material'
import { CircleArrowDown, CircleChevronUp, DollarSign, Search } from 'lucide-react'

import styles from './style.module.css'
import { useState } from 'react'

export function Home() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            {/* 1rem => 16px 2rem => 32px */}
            {/* ChakraUI 4 => 16px - 2 => 8px 1 => 4px  */}
            {/* MD => TELAS MÉDIAS => MEDIUM || XS => extra small  */}
            <div className={styles.container}>
                <Grid container spacing={4} maxWidth={"1120px"} marginTop={"-78px"}>
                    <Grid item md={4} xs={12}>
                        <Card elevation={0}>
                            <CardContent>
                                <Box display="flex" alignItems="center" justifyContent="space-between" marginBottom={1.5}>
                                    <Typography color="#4D4D53">Entradas</Typography>
                                    <CircleChevronUp size={32} color="#00B37E" />
                                </Box>
                                <Typography variant="h5" fontWeight="bold">R$ 17.400</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item md={4} xs={12}>
                        <Card elevation={0}>
                            <CardContent>
                                <Box display="flex" alignItems="center" justifyContent="space-between" marginBottom={1.5}>
                                    <Typography color="#4D4D53">Saídas</Typography>
                                    <CircleArrowDown size={32} color="#D32F2F" />
                                </Box>
                                <Typography variant="h5" fontWeight="bold">R$ 17.400</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item md={4} xs={12}>
                        <Card elevation={0} 
                            sx={{
                                background: "#2196F3",
                                color: "white"
                            }}
                        >
                            <CardContent>
                                <Box display="flex" alignItems="center" justifyContent="space-between" marginBottom={1.5}>
                                    <Typography>Total</Typography>
                                    <DollarSign size={32} />
                                </Box>
                                <Typography variant="h5" fontWeight="bold">R$ 17.400</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>

                <Box display="flex" alignItems="center" gap={2} width="100%" mt={8}>
                    <TextField 
                        label="Transação" 
                        variant="outlined" 
                        placeholder='Diga o nome da transação' 
                        sx={{
                            flex: 1,
                        }}
                        size='medium'
                    />
                    <Button startIcon={<Search />} size="large" variant="contained">Buscar</Button>
                </Box>


                <Table sx={{ minWidth: 650, marginTop: 6, }} aria-label="simple table">
                    <TableHead>
                    <TableRow>
                        <TableCell >Descrição</TableCell>
                        <TableCell align="center">Valor</TableCell>
                        <TableCell align="right">Categoria</TableCell>
                        <TableCell align="right">Data</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                Desenvolvimento de jogos
                            </TableCell>
                            <TableCell align="center">R$ 12.000</TableCell>
                            <TableCell align="right">Venda</TableCell>
                            <TableCell align="right">25/04/24</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
                <Box display="flex" alignItems="center" justifyContent="center" mt={6}>
                    <Pagination count={10} color="primary" />
                </Box>
            </div>

            <Dialog 
                open={isOpen}  
                onClose={() => setIsOpen(false)}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle>Nova transação</DialogTitle>
                <DialogContent>
                    <Grid container width="100%" gap={2} mt={2}>
                        <Grid item md={12}>
                            <TextField fullWidth variant="outlined" label="Descrição" />
                        </Grid>
                        <Grid item md={12}>
                            <TextField fullWidth variant="outlined" label="Valor" />
                        </Grid>
                        <Grid item md={12}>
                            <TextField fullWidth variant="outlined" label="Categoria" />
                        </Grid>
                    </Grid>
                </DialogContent>
                <DialogActions>
                    <Button>Cadastrar</Button>
                </DialogActions>
            </Dialog>
        </>
    )
}