import { login } from "../services/auth";

describe('Testing login funciton', () =>
{
    it('Testing if logins exists', async ()=>
    {
        const res = await login("","")
        expect(res.status).toBe(200)
    });
    it('Testing if logins doesnt exists', async ()=>
    {
        const res = await login("unexisting","unexisting")
        expect(res.status).toBe(400)
    });
})