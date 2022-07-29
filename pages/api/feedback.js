import fs from "fs";
import path from "path";
export const buildFeedbackPath = () => {
  return path.join(process.cwd(), "data", "feedback.json");
};
export const extractFeedbackData = (filePath) => {
  const fileData = fs.readFileSync(filePath);
  return JSON.parse(fileData);
};
function handler(req, res) {
  // try {

  if (req.method === "POST") {
    const enteredEmail = req.body.email;
    const enteredFeedback = req.body.feedback;
    const newFeedback = {
      id: new Date().toISOString(),
      email: enteredEmail,
      feedback: enteredFeedback,
    };

    const filePath = buildFeedbackPath();
    const data = extractFeedbackData(filePath);
    data.push(newFeedback);
    fs.writeFileSync(filePath, JSON.stringify(data));
    res.status(201).json({ message: "Success!", feedback: newFeedback });
  } else {
    const filePath = buildFeedbackPath();
    const data = extractFeedbackData(filePath);
    res.status(200).json({ feedback: data });
  }
  // } catch {
  //   (error) => console.log("error", error);
  // }
}
export default handler;
