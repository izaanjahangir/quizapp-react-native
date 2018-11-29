const BASE_URL = "https://opentdb.com/api.php";

const fetchQuiz = () => {
    return new Promise(async (resolve, reject) => {
        const api = `${BASE_URL}?amount=10&category=18&difficulty=easy`
        const response = await fetch(api).catch(err => reject(err));
        const json = await response.json();
        resolve(json.results)
    })
}

const Trivia = {
    fetchQuiz
}

export default Trivia;
