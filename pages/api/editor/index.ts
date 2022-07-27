import { notify } from "@/lib/utils";

export default async function handler(req, res) {
  if (req.method === "POST") {
    if(req.body.password !== process.env.EDITOR_PASSWORD)
    try {
      notify("Venty", "Article mis à jour", 5);
      res.status(200).json();
    } catch (err) {
      notify(
        "Venty",
        "Une erreur est survenue lors de la mise à jour de l'article",
        5
      );
      console.log("❌ " + err);
      res.status(500).json({ statusCode: 500, message: err.raw.message });
    }
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method Not Allowed");
  }
}
