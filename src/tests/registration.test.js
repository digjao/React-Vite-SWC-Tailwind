import { registration } from "../services/auth";


describe('Testing registration function', () =>
{
    it.only('Testing if its working', async ()=>
    {
        const res = await registration("", "", "", "", "")
        expect(res.status).toBe(200)
        

    })});
