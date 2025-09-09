import './App.css'
import {useState} from "react";
import QuizForm from "./QuizForm.tsx";
function App() {
    type newQuestionType = {
        question: string,
        level: string,
    };

    const [question, setQuestion] = useState('');
    const [level, setLevel] = useState('easy');
    const [questions, setQuestions] = useState<newQuestionType>({question: "", level: ""});
    const [questionList, setQuestionList] = useState<newQuestionType[]>([]);
    const [isActive, setIsActive] = useState(false);
    const [randomQuestion, setRandomQuestion] = useState(0);

    function addQuestion() {
        setQuestions({question, level});
        setQuestionList([...questionList, questions]);
        setQuestion("");
    }
    function setActive() {
        setIsActive(true);
        setRandomQuestion(Math.floor(Math.random() * questionList.length));
    }

  return (
    <>
        <div style={{width:'100%', display:'flex', flexDirection:'column'}}>
            <h1>Quiz</h1>
            <form>
                <input style={{height:'30px', marginRight: "10px"}} type={"text"} value={question} onChange={(e) => setQuestion(e.target.value)} placeholder={"Enter a question"}/>
                <select style={{height:'37px'}} value={level} onChange={(e) => setLevel(e.target.value)}>
                    <option value="easy">Easy</option>
                    <option value="medium">Medium</option>
                    <option value="hard">Hard</option>
                </select>
                <input style={{height:'37px', marginRight: "10px" }} type={"button"} value={"Add Question"} onClick={addQuestion}/>
                { questionList.length <= 3 ?
                    <input style={{height:'37px', marginRight: "10px"}} type={"button"} value={"Start game"} onClick={setActive} disabled={true} /> : <input style={{height:'37px'}} type={"button"} value={"Start game"} onClick={setActive} disabled={false} />
                }
                {isActive && <QuizForm input={questionList[randomQuestion]} />}

            </form>
        </div>
    </>
  )
}

export default App
