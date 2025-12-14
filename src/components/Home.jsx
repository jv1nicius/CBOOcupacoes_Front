import { useState } from 'react'
import cboLogo from '../assets/cbo.svg'
import Search from './Search'
import TableList from './TableList'
import Switch from "@mui/material/Switch";
import Box from '@mui/material/Box';
import Typography from "@mui/material/Typography";

export default function Home({ list, searchSolr }) {
    const [showTable, setShowTable] = useState(false);
    const [value, setValue] = useState("");

    return (

        <Box
            sx={{
                display: "flex",
                width: "100%",
                minHeight: "100vh",
                flexDirection: "column",
                position: "relative",
                overflow: "hidden",
                backgroundColor: "#f4f4f4"
            }}
        >
            {/* meio circulo de design */}
            <Box
                sx={{
                    position: "absolute",
                    top: "25px",
                    left: "-300px",
                    width: "700px",
                    height: "700px",
                    backgroundColor: "#fff",
                    borderRadius: "50%",
                    zIndex: 0
                }}
            />

            {/* circulo direito */}
            <Box
                sx={{
                    position: "absolute",
                    top: "-250px",
                    right: "-250px",
                    width: "600px",
                    height: "600px",
                    backgroundColor: "#fff",
                    borderRadius: "50%",
                    zIndex: 0
                }}
            />

            {/* conteudo main */}
            <Box sx={{ position: "relative", zIndex: 1 }}>

                {/* Cabeçalho */}
                <Typography
                    variant="h3"
                    component="h1"
                    sx={{
                        fontWeight: "bold",
                        color: "#333",
                        ml: "30vh",
                        mt: 6
                    }}
                >
                    CBO - Ocupações
                </Typography>

                <Box sx={{ flex: 1, display: "flex", justifyContent: "center", mt: "20vh" }}>

                    <Box sx={{ display: "flex", alignItems: "flex-start", gap: 8, ml: "-10vw" }}>

                        {/* LOGO */}
                        <Box sx={{ display: "flex", alignItems: "center" }}>
                            <img src={cboLogo} style={{ width: "150px", height: "auto" }} alt="CBO logo" />
                        </Box>

                        {/* Linha do buscador */}
                        <Box sx={{ ml: "15vw" }}>
                            <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>

                                <Search showOptions={!showTable} list={list} value={value} setValue={setValue} searchSolr={searchSolr} />

                                <Switch
                                    checked={showTable}
                                    onChange={() => setShowTable(!showTable)}
                                    sx={{
                                        '& .MuiSwitch-switchBase.Mui-checked': {
                                            color: '#18E0C9',
                                        },
                                        '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
                                            backgroundColor: '#18E0C9',
                                        },
                                    }}
                                />

                            </Box>

                            <Box sx={{ mt: 2 }}>
                                {showTable && <TableList list={list} setValue={setValue} setShowTable={setShowTable} />}
                            </Box>

                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>


    )
}