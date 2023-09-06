import {Router} from "express";

export const registerApi = (router: Router) => {
    router.get('/status', (req, res) => {
        res.status(200).json({message: 'OK'})
    });
}