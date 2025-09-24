export default function handler(req, res) {

if (req.method !== "POST") {

res.setHeader("Allow", "POST");

return res.status(405).json({ status: "error", message: "POST only" });

}

const { data1, data2, data3 } = req.body ?? {};

if (data1 === undefined || data2 === undefined || data3 === undefined) {

return res.status(400).json({ status: "error", message: "data1, data2, data3 are required" });

}

return res.status(200).json({ data1, data2, data3, status: "success" });

}
