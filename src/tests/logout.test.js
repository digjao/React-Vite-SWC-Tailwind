import { logout } from "../services/auth";

describe('Testing logout funciton', () =>
{
    it('Testing if its possible to logout', async ()=>
    {
        const res = await logout()
        console.log(res);
    //     expect(res.status).toBe()
    // });

    })});
