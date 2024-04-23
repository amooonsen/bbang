import express, { Application, Request, Response } from 'express'

const app: Application = express()

const port: number = 4000

app.get('/', (req: Request, res: Response) => {
    res.send('시작')
})

app.listen(port, function () {
    console.log(`App is listening on http://localhost:${port} !`)
})