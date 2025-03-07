export default function Home() {

    const students=Array.from({length:500}, (_, i)=>({
        name:`Student ${i+1}`,
        score: Math.floor(Math.random()*100),
    }));
    return (
        <div>
        <h1>Student Report</h1>
        <table style={{border:'1px black'}}>
            <thead>
                <tr>
                    <td>Name</td>
                    <td>Score</td>
                </tr>
            </thead>
            <tbody>
                {students.map((student,index)=>{
                 return (  <tr key={index}>
                        <td>{student.name}</td>
                        <td>{student.score}</td>

                    </tr>)
                })}
            </tbody>
        </table>
        </div>
    )
}