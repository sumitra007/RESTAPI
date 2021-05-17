class Response {
constructor(app) {
app.use((req,res,next) => this.bindResponse(req,res,next));
}
bindResponse(req,res,next) {
this.request = req;
res.sendResponse = (response) => {
res.json({
status: 'success',
data: response
});
};
next();
}
}
module.exports = Response;