import { useNavigate, useParams, Link } from "react-router-dom"

import {
    Container,
    Grid,
    Card,
    CardActionArea,
    CardMedia,
    CardContent,
    Typography,
    Button,
} from "@mui/material"

export const Info = () => {
    let params = useParams<any>()
    console.log("params:", params)
    let navigate = useNavigate()

    return (
        <Container maxWidth="lg" sx={{ backgroundColor: "lightGray" }}>
            <Grid
                container
                justifyContent="center"
                alignContent="flex-start"
                spacing={3}
                sx={{ height: "100vh" }}
            >
                <Grid item xs={12}>
                    <Button onClick={() => navigate(-1)}>Назад</Button>
                </Grid>
                <Grid item xs={12} sx={{ textAlign: "center" }}>
                    <Typography>{params.genId}</Typography>
                </Grid>
                <Grid item xs={12} sx={{ textAlign: "center" }}>
                    А тут должно быть описание
                </Grid>
            </Grid>
        </Container>
    )
}
