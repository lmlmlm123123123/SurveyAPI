export default function handler(req, res) {
  // CORS (optional; keep if calling from a browser on another origin)
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  if (req.method === "OPTIONS") return res.status(204).end();

  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ status: "error", message: "POST only" });
  }

  const { cdr_id, question1, question2, question3 } = req.body ?? {};

  // Basic validation: require cdr_id
  if (cdr_id === undefined) {
    return res.status(400).json({ status: "error", message: "cdr_id is required" });
  }

  // Optionally, you can log or store the questions here.

  return res.status(200).json({
    status: "success",
    cdr_id: cdr_id, // echo back exactly what you sent
  });
}
