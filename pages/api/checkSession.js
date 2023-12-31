import withSession from "../../lib/session";

export default withSession(async(req,res)=>{
    const user = req.session.get('user');
    res.send(user);
});