interface props {
    input: {
        question: string;
        level: string;
    };
}
function QuizForm(props: props) {
    return (
        <>
            <div style={{width:'250px'}}>
                <p style={{fontWeight: "bolder"}}>Question: {props.input.question} </p>
                <p style={{fontWeight: "bolder"}}>Level: {props.input.level}</p>
            </div>
        </>
    )
}
export default QuizForm;