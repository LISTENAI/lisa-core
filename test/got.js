const { got } = require("../lib")

async function test () {
  const {body} = await got('https://www.baidu.com/home/xman/data/tipspluslist?indextype=manht&_req_seqid=0xb9d718dd00010a75&asyn=1&t=1614048626763&sid=33423_33583_33344_31253_26350');
	console.log(body);
}

test()
