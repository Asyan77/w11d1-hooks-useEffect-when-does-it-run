import { useEffect, useState } from "react"

const Main = () => {
    const [toggleOne, setToggle] = useState(false)
    const [toggleTwo, setToggleTwo] = useState(false)
    const [count, setCount] = useState (0)

    useEffect( () => {
        console.log('useEffect is successful')
    },[])

    useEffect( () => {
        console.log('working?')
        if (toggleTwo)
        console.log('I lovee to togglee your toggle')
    },[toggleTwo])

    useEffect( () => {
        const myInterval = setInterval(() => {
            console.log(`UseEffect3 with interval number ${count} is running`);
        },1000);

        return () => {
            console.log(
                `UseEffect3 cleanup ran.\nsetInterval number ${count} is being cleared out`
              );
              clearInterval(myInterval);
        }
    },[count])





    return (
        <div>
            {console.log('this has rendered or re-rendere!!!')}
            <h1>Main component</h1>
            <button onClick={() => setToggle(!toggleOne)}>Toggle Meee</button>
            <button onClick={() => setToggleTwo(!toggleTwo)}>Toggle me TOO!</button>
            <button onClick={() => setCount(prevCount => prevCount + 1)}>Count</button>
        </div>
    )
}

export default Main