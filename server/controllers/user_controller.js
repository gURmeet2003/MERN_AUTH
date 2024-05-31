export const test = (req, res) => {
  try {
    res.json({ msg: "hello pumpkin" });
  } catch (e) {
    res.send(e);
  }
};
