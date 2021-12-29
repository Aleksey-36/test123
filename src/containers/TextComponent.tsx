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

import { generations } from "../constants"

export const TextComponent = () => {
    let params = useParams<any>()
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
                    <Button component={Link} to="/series">
                        Назад
                    </Button>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant="h4" align="center">
                        Поколения
                    </Typography>
                </Grid>

                {params?.id &&
                    generations[params?.id]?.map(({ link, image, title }: any) => {
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
