import { 
    Avatar, 
    Box, 
    Button, 
    Card, 
    CardContent,
    Grid, 
    TextField, 
    Typography, 
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
} from '@mui/material'
import { CircleArrowDown, CircleChevronLeft } from 'lucide-react'

import styles from './style.module.css'
import { useState } from 'react'
import { Link } from 'react-router-dom'

export function Profile() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <>  
                <Link to={-1}> <CircleChevronLeft size={16} />  Voltar</Link>
                <div className={styles.container}>
                    <Grid container spacing={4} maxWidth={"1120px"} marginTop={6}>
                        <Grid item md={3}>
                            <Avatar src="https://github.com/nicholasmacedoo.png" variant="rounded"  sx={{ width: 239, height: 239 }}/>
                        </Grid>
                        <Grid item md={9}>
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
                       
                    </Grid>

                    <Box display="flex" alignItems="center" gap={2} width="100%" mt={8}>
                        
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