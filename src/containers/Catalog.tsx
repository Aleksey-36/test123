import { useNavigate } from "react-router-dom"

import { Container, Grid, Card, CardActionArea, CardMedia, CardContent, Typography } from "@mui/material"

import { seriesCards } from "../constants"

export const CatalogContainer = () => {
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
                    <Typography variant="h4" align="center">
                        Серии
                    </Typography>
                </Grid>
                {seriesCards.map(({ link, image, title }) => {
                    return (
                        <Grid item>
                            <Card
                                onClick={() => {
                                    navigate(link)
                                }}
                            >
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        image={image}
                                        alt="1"
                                        onMouseDown={(event: any) => event.preventDefault()}
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h6" component="div">
                                            {title}
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>
                    )
                })}
            </Grid>
        </Container>
    )
}
