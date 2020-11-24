function useBack() {
    return (history)=>{

        if (history.length > 1) {
          history.goBack();
        } else {
          history.push("/");
        }
    }
}
export  {useBack}
