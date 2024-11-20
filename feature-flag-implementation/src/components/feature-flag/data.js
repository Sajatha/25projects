

const dummyApiResponse = {
    showLightAndDarkMode : false,
    showTicTacToe : false,
    showRandomColorGenerator : true,
    showAccordian : true,
    showTreeView : true,
};

function featureFlafsDataServiceCall() {

    return new Promise((resolve, reject) => {
        if(dummyApiResponse) setTimeout(resolve(dummyApiResponse),500);
        else reject('Some error occured, try again')
    })
}

export default featureFlafsDataServiceCall;