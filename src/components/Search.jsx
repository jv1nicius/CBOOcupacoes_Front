import { useEffect } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

export default function Search({ showOptions = true, value, setValue, list, searchSolr }) {

    const filterTitles = list.map(doc => doc.titulo[0])

    const options = showOptions ? [...filterTitles] : [];

    useEffect(() => {
        if (value.trim().length >= 3) {
            searchSolr(value)
        }
    }, [value])

    return (
        <Autocomplete
            freeSolo
            options={options}
            filterOptions={(x) => x}
            value={value}
            onInputChange={(e, newValue) => setValue(newValue)}
            sx={{
                width: 500,
                "& .MuiOutlinedInput-root": {
                    borderRadius: "12px",
                    border: "1px solid #18E0C9",
                    "&:hover fieldset": {
                        borderColor: "#18E0C9"
                    },
                    "&.Mui-focused fieldset": { borderColor: "#18E0C9" }
                },
                "& .MuiInputLabel-root.Mui-focused": {
                    color: "#000",
                }
            }}
            renderInput={(params) => <TextField {...params} label="Buscar..." />}
        />
    );
}
