const reviews = [];

export default function handler(req, res) {
    res.status(200).json(reviews);
}
