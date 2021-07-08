import { Figure, Container } from "react-bootstrap" 
export const notFound = () => {
    return (
        <>
        <Container fluid>
            <Figure>
                <Figure.Image
                    width={ 171 }
                    height={ 180 }
                    alt='Error 404'
                    src='/images/404.png'
                />
            </Figure>
        </Container>
        </>
    )
}