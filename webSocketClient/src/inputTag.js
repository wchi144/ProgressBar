export default InputTag(){
    // onChange Handler function
    // with event parameter
    const getInputValue = (event)=>{
        // show the user input value to console
        const userValue = event.target.value;

        console.log(userValue);
    };

    return (
        // Add onChnage handler with function to execute
        <input type="text" onChange={getInputValue} />
    );
}